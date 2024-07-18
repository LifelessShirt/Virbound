import { useContext, useEffect, useState } from 'react';

import LoginForm from '../../Components/LoginForm/LoginForm';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';
import { GetData } from '../../Utils/GetData';
import axios from 'axios';
import Alerts from '../../Utils/Alerts/Alerts';
import { Button } from '../../Components/Button';
import { ModalContext } from '../../Contexts/ModalContext/ModalContext';

const User = () => {
  const {modal, setModal} = useContext(ModalContext);
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
      <div className="wrapper wrapperPadding">
      <ContentBlock>
          {user ? 
          <div className='userLogged'>
            <div className='userWrapper'>
              <div className='userAvatar' style={{backgroundColor: `${user['avatarColor']}88`}}>{user['avatarIcon']}</div>
              <Subtitle>{user['name']}</Subtitle>
              <button className='userLogout' onClick={() => logout()}></button>
            </div>
          </div>
          : 
          <div className='userNotLogged'>
            <Subtitle>
              👋 Hi! You need to sign in to see this page.<br/>
            </Subtitle>
            <button onClick={() => setModal(true)}>Want to sign in?</button>
          </div>
          }
        </ContentBlock>
      </div>
      <Footer />
    </>

  );
}

export default User;
