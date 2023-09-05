import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';

function About() {
  return ( <>
    <div className="About-page">
      <ContentBlock>
        <Title>🤔 Що є Вірбаунд?</Title><br/>
        <Subtitle>
          Вірбаунд - це об'єднання творчіх і цікавих людей. 
          Ми любимо разом пограти в якісь ігри, подивитись різномаїтні відосики на Ютубі, пострімити наші страждання у соулс-лайк іграх, 
          займатись жорстким порєвом з перекомпіляцією ядра Лінукс і багато чого іншого. 
          Кратко кажучи - в нас веселий і найкрутіший колектив друзяк.
        </Subtitle><br/>
        <Subtitle>
          Доречі кажучи: Вірбаунд (від англійского Virbound) - це комбінація слів Virtual і Bound, 
          що можна перекласти як Віртуально Зв'язані.
        </Subtitle>
      </ContentBlock>
      <ContentBlock>
        <Title>🎭 Наші трансляції</Title><br/>
        <Subtitle>
          Як вже було написано вище - ми любимо проводити трансляції на Twitch, тож долучайтесь до нас:
        </Subtitle>
        <TwitchEmbed
          channel="LifelessShirt"
          darkMode={false}
          onAuthenticate={function noRefCheck(){}}
          onVideoPause={function noRefCheck(){}}
          onVideoPlay={function noRefCheck(){}}
          onVideoReady={function noRefCheck(){}}
          withChat={false}
          height={"480px"}
          width={"100%"}
        />
      </ContentBlock>
      <ContentBlock>
        <Title>🌐 Засновники</Title><br/>
        <Subtitle>
          Ті герої, які заснували Virbound:<br />
          <a href="#" target="_blank">Frauбібич </a> 
          <a href="#" target="_blank">LifelessБуба </a> 
          <a href="#" target="_blank">HypnoБуба </a> 
          <a href="#" target="_blank">Дікобуба</a>
        </Subtitle>
      </ContentBlock>
    </div>
    <Footer />
    </>
  );
}

export default About;
