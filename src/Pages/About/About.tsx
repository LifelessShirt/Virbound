import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';

function About() {
  return ( <>
    <div className="wrapper wrapperPadding">
      <ContentBlock>
        <Title>🤔 What the <b>Virbound</b>?</Title><br/>
        <Subtitle>
        Virbound is a community of creative and interesting people. 
        We like to play games together, watch various YouTube videos, stream our suffering in souls-like games, 
        do hard tearing with Linux kernel recompilation, and much more. 
        In short, we have the funniest and coolest group of friends.
        </Subtitle><br/>
        <Subtitle>
        By the way: Virbound is a combination of the words Virtual and Bound, 
        which can be translated as “virtually connected”.
        </Subtitle>
      </ContentBlock>
      <ContentBlock>
        <Title>🎭 Our streams</Title><br/>
        <Subtitle>
          As was mentioned before, sometimes we do livestreams.<br/>
          Here is our channel:
        </Subtitle>
        <TwitchEmbed
          channel="LifelessShirt"
          darkMode={false}
          onAuthenticate={function noRefCheck(){}}
          onVideoPause={function noRefCheck(){}}
          onVideoPlay={function noRefCheck(){}}
          onVideoReady={function noRefCheck(){}}
          withChat={false}
          height={""}
          width={""}
        />
      </ContentBlock>
    </div>
    <Footer />
    </>
  );
}

export default About;
