import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Button } from '../../Components/Button';
import { useTranslation } from 'react-i18next';

function Home() {
  // To use translation uncomment this:
  // const { t, i18n } = useTranslation();
  //
  // And replace text on {t('code')}
  return ( <>
    <div className="wrapper wrapperNoBorderRadius">
      <div className="fullSizeBlock">
		<div className="fullSizeBlockInnerText">
        <Title>Welcome to Virbound</Title>
		<br/>
        <Subtitle>
		A community of players who like to have a good time and socialize. 
		We have our own Minecraft server and occasionally organize streams. 
		Read more about us by clicking the button below!
        </Subtitle>
		<br/>
        <Link to="/minebound"><Button type="focus">Our Minecraft server</Button></Link>
        <Link to="/about"><Button>About us</Button></Link>
      </div>
	  <div className='fullSizeBlockInnerImage'><div className='image-shadow'></div><div className='image'></div></div>
	  </div>
    </div>
    </>
  );
}

export default Home;
