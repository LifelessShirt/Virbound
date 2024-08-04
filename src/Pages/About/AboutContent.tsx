import { TwitchEmbed } from "react-twitch-embed";
import { Subtitle } from "../../Components/Subtitle";
import { Title } from "../../Components/Title";
import { Button } from "../../Components/Button";
import Badge from "../../Components/Badge/Badge";

export const AboutContent = [
        {id:'0', button: "About", content:
        <>
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
        </>
        },

        {id:'1', button: "Badges", content:
        <>
        <Title>🏅 What is <b>badges</b>?</Title><br/>
        <Subtitle>
        <b>Badges</b> are reward for using this site or playing at our Minecraft server.<br/>
        By playing on MineBound you can earn this badges:<br/><br/>
        <Badge id="1" type="mini"/>Explorer<br/>
        Take 20,000 steps.
        <br/><br/>
        <Badge id="2" type="mini" />Dragonborn<br/>
        Slay ender dragon 10 times.
        <br/><br/>
        <Badge id="3" type="mini" />Fighter<br/>
        Win a PvP fight.
        </Subtitle>
        <a href="about?navTo=1"><Button>Help</Button></a>
        <a href=""><Button>Reload page</Button></a>
        <br/><br/>
        <p style={{opacity: "0.5"}}>*Currently still in development, not all features are available.</p>
        </>
        },
            
        {id:'2', button: "Livestreams", content:
        <>
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
        </>
            }
    ];