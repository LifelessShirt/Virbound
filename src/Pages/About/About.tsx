import { Button } from '../../Components/Button';
import { ContentBlock } from '../../Components/ContentBlock';
import { Footer } from '../../Components/Footer';
import { Subtitle } from '../../Components/Subtitle';
import { Title } from '../../Components/Title';

const About = () => {
  return (
    <>
    <div className="wrapper wrapperPadding">
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
          You can create your own guilds and clans named <b>Virbound</b> and join to our community as Guildmaster.
        </Subtitle>
        <br />
        <a href="wiki?navTo=3"><Button>Read more about it</Button></a>
      </ContentBlock>
      <ContentBlock>
        <Title>🙋‍♂️ Our socials</Title>
        <a href="https://discord.gg/rMhqK6BrBZ" target='_blank'><Button>Discord</Button></a>
        <a href='https://t.me/virbound' target='_blank'><Button>Telegram</Button></a>
      </ContentBlock>
    </div>
    <Footer />
    </>
  );
}

export default About;
