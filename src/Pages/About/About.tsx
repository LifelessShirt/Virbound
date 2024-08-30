import { Button } from '../../Components/Button';
import { ContentBlock } from '../../Components/ContentBlock';
import { Subtitle } from '../../Components/Subtitle';
import { Title } from '../../Components/Title';

const About = () => {
  return (
    <>
    <div className="wrapper wrapperPadding">
      <ContentBlock>
        <Title>Greg, change this block, add some styles</Title>
        <Subtitle>😊 Our socials</Subtitle><br/>
        <a><Button>Discord</Button></a>
        <a><Button>Telegram</Button></a>
      </ContentBlock>
      <ContentBlock>
        <Title>🤔 What the <b>Virbound</b>?</Title><br/>
        <Subtitle>
        Virbound is a community of creative and interesting people. <br/>
        We like to play games together, watch various YouTube videos, stream our suffering in souls-like games, 
        do hard tearing with Linux kernel recompilation, and much more.<br/>
        <br/>
        In short, we are the funniest and coolest group of friends.
        </Subtitle>
      </ContentBlock>
      <ContentBlock>
        <Title>🏰 Guilds and clans</Title><br/>
        <Subtitle>
          Currently we have only one guild in <b>The Elder Scrolls: Online</b>.<br />
          Also you can create your own guilds and clans named <b>Virbound</b> in other games. Just notify admins at our <a href="https://discord.gg/rMhqK6BrBZ" target='_blank'>Discord</a> about it.
        </Subtitle>
        <br />
        <a href="wiki?navTo=3"><Button>Read more about it</Button></a>
      </ContentBlock>
    </div>
    </>
  );
}

export default About;
