import './User.css';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useContext, useEffect, useState } from 'react';
import { ContentBlock } from '../../Components/ContentBlock';
import { Subtitle } from '../../Components/Subtitle';
import { GetData } from '../../Utils/GetData';
import axios from 'axios';
import Alerts from '../../Utils/Alerts/Alerts';
import { ModalContext } from '../../Contexts/ModalContext/ModalContext';
import { Button } from '../../Components/Button';
import Badge from '../../Components/Badge/Badge';
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';

const User = () => {
  const {modal, setModal} = useContext(ModalContext);
  const [activationError, setActivationError] = useState(0);
  const [openSettings, setOpenSettings] = useState(false);

  // Settings states
  const [changeUserInfoStatus, setChangeUserInfoStatus] = useState<any>(null);
  const [userInfo, setUserInfo] = useState<{"avatarColor":String, "avatarIcon":String,"name":String}>({"avatarColor":"", "avatarIcon":"","name":""});

  const url = new URL(document.location.toString()).searchParams;
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
  if (url.has("tab")) {
    switch(url.get("tab")) {
      case "settings":
         setTimeout(() => setOpenSettings(true), 10)
         break;
    }
  }
  const user = GetData("https://virbound.com/system/user/user.php");

  return ( 
    <>
    {activationError === 2 ?
    <Alerts type="warning" message="Error while activating account. Try to reload page or try again later." />
    : undefined}
      <div className="wrapper wrapperPadding">
      <ContentBlock>
          {user ? // See this if user is logged in
            openSettings ?
              UserSettings(user, userInfo, setUserInfo, changeUserInfoStatus, setChangeUserInfoStatus)
            :
              UserProfile(user)
          : // See this if user is NOT logged in
          <div className='userNotLogged'>
            <Subtitle>
              👋 Hi! You need to sign in to see this page.<br/>
            </Subtitle>
            <button onClick={() => setModal(true)}>Want to sign in?</button>
          </div>
          }
        </ContentBlock>
      </div>
    </>

  );
}

export default User;
