import React, { useRef } from 'react';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { IQ } from '../../Components/InlineQuote/InlineQuote';

function Minebound() {
  return ( <>
    <div className="wrapper">
    <video className='minebound-video' autoPlay muted loop>
        <source src="videos/minebound.bg.webm" type="video/webm" />
    </video>
    <div className='minebound-video-hover'></div>
      <div className="fullSizeBlock"><div className="fullSizeBlockMinebound">
        <Title>MineBound</Title><br />
        <Subtitle>
        A server that allows you to unleash your creative potential
        </Subtitle><br />
        <Button type='focus' customOnClick='copyIP'>Copy IP</Button><br />
        Fabric 1.20.1 • License is required
      </div></div>
      <ContentBlock>
        <Title>🌶️ Spicy vanilla experience</Title><br/>
        <Subtitle>
          We are playing on version 1.20.1 with some ✨ magic and ⚙️ industrial mods, 
          that provide a new experience in-game.
        </Subtitle><br/>
        <Title>🛸 Story</Title><br/>
        <Subtitle>
          On a server you can saw how new stories has write everyday. 
          Also we have an global storyline, that progresses together with players.
        </Subtitle><br/>
        <Title>💪 Cooperate</Title><br/>
        <Subtitle>
          Cooperate with other players. Build, craft, explore and fight together as bloody brothers.
        </Subtitle>
      </ContentBlock>
      <ContentBlock>
        <Title>🤔 How to play</Title><br/>
        <Subtitle>
        It's not hard, just download our build, extract it in this path:<br/>
        <IQ>%APPDATA%/.minecraft/mods</IQ><br/>
        Then install latest Fabric 1.20.1 and run it. That's all!<br/>
        </Subtitle><br/>
        <a href='https://virbound.com/media/minebound-mods-latest.zip' target='_download'><Button>Download build</Button></a>
      </ContentBlock>
    </div>
    <Footer />
  </>
  );
}

export default Minebound;
