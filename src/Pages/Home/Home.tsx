import React from 'react';
import Style from './Home.module.css'
import { Link } from 'react-router-dom';

import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Button } from '../../Components/Button';

function Home() {
  return ( <>
    <div className="Home-page">
		<div className={Style.background}>
			<div className={Style.blur}>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={Style.filterdodge}></div>
			<div className={Style.filterburn}></div>   
		</div>
      <div className="fullSizeBlock"><div className="fullSizeBlockInner">
        <Title>Вітаємо у Вірбаунд</Title>
        <Subtitle>
          Спілка творчіх осіб, які люблять добре провести час і поспілкуватись. Маємо свій Minecraft сервер а також час від часу проводимо стріми. Читай більше про нас за кнопкою нижче!
        </Subtitle>
        <Link to="/minebound"><Button type="focus">Про Minecraft сервер</Button></Link>
        <Link to="/about"><Button>Про нас</Button></Link>
      </div></div>
    </div>
    </>
  );
}

export default Home;
