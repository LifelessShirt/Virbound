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

const User = () => {
  const {modal, setModal} = useContext(ModalContext);
  const [activationError, setActivationError] = useState(0);

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
      <div className="wrapper wrapperPadding">
      <ContentBlock>
          {user ? // See this if user is logged in
          <div className='userLogged'>
            <div className='userNameWrapper'>
              <div className='userAvatar' style={{backgroundColor: `${user['avatarColor']}88`}}>{user['avatarIcon']}</div>
              <Subtitle>{user['name']}</Subtitle>
              {/* <button className='userLogout' onClick={() => logout()}></button> */}
            </div>
            <div className='userContentWrapper'>
              <div className='userContentBlock' style={{flexDirection: "row", flexWrap: "wrap"}}>
                {user.badges ? 
                  user['badges'].split(",").map((item:any) => (
                    <Badge id={item} />
                  ))
                :
                  <>
                  <Subtitle>You have not earned any badges yet</Subtitle>
                  <a href='/wiki?navTo=1'><Button>How to earn?</Button></a>
                  </>
                }
              </div>
              <div className='userContentBlock'>
                <Subtitle>MineBound account is not linked</Subtitle>
              </div>
            </div>
            <Button type='inline'>Settings</Button>
            <button className='userLogout2' onClick={() => logout()}></button>
          </div>
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
