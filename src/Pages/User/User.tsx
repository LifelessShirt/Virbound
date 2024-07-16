import { useEffect, useState } from 'react';

import LoginForm from '../../Components/LoginForm/LoginForm';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';
import { GetData } from '../../Utils/GetData';
import axios from 'axios';
import Alerts from '../../Utils/Alerts/Alerts';

const User = () => {
  const url = new URL(document.location.toString()).searchParams;
  const [activationError, setActivationError] = useState(0);
  if (url.has("activate")) {
    axios.post("https://virbound.com/system/user/activate.php", {
        code: url.get("activate")
      })
      .then((response) => {
        if (!response.data.error) {
          localStorage.setItem("access_token", response.data.access_token);
          setActivationError(1);
          window.location.assign("/user");
        } else {
          setActivationError(2);
        }
      })
      .catch((error) => {
        setActivationError(2);
      });
    
  }
  const user = GetData("https://virbound.com/system/user/user.php");
  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  }

  return ( 
    <>
    {activationError === 2 ?
    <Alerts type="warning" message="Error while activating account. Try to reload page or try again later." />
    : undefined}
    {activationError === 1 ?
    <Alerts type="success" message="Account activated!" />
    : undefined}
      <div className="About-page">
      <ContentBlock>
          {user ? 
          <>
            <Title>{user['name']}</Title>
            <button onClick={() => logout()}>Log Out</button>
          </>
          : 
          <>
            <Title>Тестування авторизації</Title><br/>
            <Subtitle>
              Спробуйте залогінитись за допомогою форми нижче:
            </Subtitle><br/>
            <LoginForm />
          </>
          }
        </ContentBlock>
      </div>
      <Footer />
    </>

  );
}

export default User;
