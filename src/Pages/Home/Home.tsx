import React from 'react';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Button } from '../../Components/Button';

function Home() {
  return ( <>
    <div className="Home-page">
      <div className="fullSizeBlock"><div className="fullSizeBlockInner">
        <Title>Вітаємо у Вірбаунд</Title>
        <Subtitle>
          Спілка творчіх осіб, які люблять добре провести час і поспілкуватись. Маємо свій Minecraft сервер а також час від часу проводимо стріми. Читай більше про нас за кнопкою нижче!
        </Subtitle>
        <Button type="focus">Про Minecraft сервер</Button><Button>Про нас</Button>
      </div></div>
    </div>
    </>
  );
}

export default Home;
