import { useEffect, useState } from 'react';

import LoginForm from '../../Components/LoginForm/LoginForm';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';
import { GetData } from '../../Utils/GetData';

const User = () => {
  const url = new URL(document.location.toString()).searchParams;
  if (url.has("activate")) {
    const activate = GetData("https://virbound.com/system/user/activate.php?code="+url.get("activate"));
    
  }
  
  const user = GetData("https://virbound.com/system/user/user.php");
  const logout = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  }
  return ( 
    <>
      <div className="About-page">
        {user ? 
        <ContentBlock>
          <Title>{user['name']}</Title>
          <button onClick={() => logout()}>Log Out</button>
        </ContentBlock>
        : 
        <ContentBlock>
          <Title>Тестування авторизації</Title><br/>
          <Subtitle>
            Спробуйте залогінитись за допомогою форми нижче:
          </Subtitle><br/>
          <LoginForm />
        </ContentBlock>
        }
      </div>
      <Footer />
    </>

  );
}

export default User;
