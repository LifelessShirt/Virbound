import Style from './GoogleLoginForm.module.css';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Alerts from '../../Utils/Alerts/Alerts';

const GoogleLoginForm = ({ setResponseStatus }:{setResponseStatus:React.Dispatch<React.SetStateAction<any>>}) => {
  const googleLogin = useGoogleLogin({
    onSuccess: (responseToken) => {
      axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${responseToken.access_token}`,
        }
      })
      .then(function(responseGoogle) {
          axios.post('https://virbound.com/system/user/auth.php', {
            google_data: responseGoogle,
            account_type: 'google'
          })
          .then(function (response) {
            if (!response.data.error) {
              localStorage.setItem("access_token", response.data.access_token);
              window.location.reload();
            } else {
              console.log(response.data.status);
              setResponseStatus(<Alerts type="warning" message={response.data.status} />);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function(errorGoogle) {
        console.log(errorGoogle);
      });
    } 
  });

  return (
    <div>
      <button className={Style.googleLoginButton} onClick={() => googleLogin()}>Continue with Google</button>
    </div>
  );
}

export default GoogleLoginForm;
