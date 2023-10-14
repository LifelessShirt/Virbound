import React from 'react';

import LoginForm from '../../Components/LoginForm/LoginForm';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';

const User = () => {
  return ( <>
    <div className="About-page">
      <ContentBlock>
        <Title>Тестування авторизації</Title><br/>
        <Subtitle>
          Спробуйте залогінитись за допомогою форми нижче:
        </Subtitle><br/>
        <LoginForm />
      </ContentBlock>
    </div>
    <Footer />
    </>
  );
}

export default User;
