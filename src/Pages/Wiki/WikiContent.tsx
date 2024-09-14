import { TwitchEmbed } from "react-twitch-embed";
import { Subtitle } from "../../Components/Subtitle";
import { Title } from "../../Components/Title";
import { Button } from "../../Components/Button";
import Badge from "../../Components/Badge/Badge";
import { IQ } from "../../Components/InlineQuote/InlineQuote";
import Quote from "../../Components/Quote/Quote";

export const WikiContent = [
        /////////////////////////////////////////////////////////////
        {id:'0', sub: false, button: "Introduction", content:
        <>
        <Title>
          Introduction
        </Title><br/>
        <Subtitle>
          This is a wiki of our community.<br/>
          Here you can find information about our community, how to join us and much more.
        </Subtitle><br/>
        <br/>
        <Quote>
          You can use the on-page search in your browser to find the question you need on the page:
          <ul>
            <li>For Windows: <IQ>Ctrl</IQ> + <IQ>F</IQ></li>
            <li>For MacOS: <IQ>Cmd</IQ> + <IQ>F</IQ></li>
            <li>Mobile devices open <IQ>Browser menu</IQ> and tap <IQ>Find</IQ></li>
          </ul>
        </Quote>
        </>
        },
        /////////////////////////////////////////////////////////////
        {id:'6', sub: false, button: "Events", content:
        <>
        <Title>
          🎉 Events
        </Title><br/>
        <Subtitle>
          From time to time we host events that you can participate in.<br/>
          Events can be of different types, the most common one is achiving a goal in <a href="/minebound"><IQ>Minebound</IQ></a>.<br/>
          <br/>
          Reward can include in-game items, <a href="/wiki?navTo=1"><IQ>badges</IQ></a>, games on the Steam and much more.<br/>
          To follow for active events join our <a href="https://discord.gg/rMhqK6BrBZ" target="_blank"><IQ>Discord</IQ></a>.
        </Subtitle>
        </>
        },
        /////////////////////////////////////////////////////////////
        {id:'1', sub: false, button: "Badges", content:
        <>
        <Title>
          🏅 What is <b>badges</b>?
        </Title><br/>
        <Subtitle>
          <b>Badges</b> are a reward for activity in the Virbound.<br/>
          Badges can be obtained automatically by completing different challenges in games or by participating in our <a href="/wiki?navTo=6"><IQ>events</IQ></a>.<br/>
          <br/>
          Badges can exchanged to different rewards.<br/>
          Exchange is avaliable in your <a href="/user"><IQ>account</IQ></a>.
        </Subtitle>
        <br/><br/>
        <p style={{opacity: "0.5"}}>*Currently still in development, not all features are available.</p>
        </>
        },
        /////////////////////////////////////////////////////////////
        {id:'5', sub: true, button: "Minebound", content:
        <>
        <Title>
          <b>Minebound badges</b>
        </Title><br/>
        <Subtitle>
          By playing on our <a href="/minebound"><IQ>Minecraft server</IQ></a> you can earn these Badges:<br/><br/>
          <Badge id="1" type="mini"/>Explorer<br/>
          Take 20,000 steps.
          <br/><br/>
          <Badge id="2" type="mini" />Dragonborn<br/>
          Slay ender dragon 10 times.
          <br/><br/>
          <Badge id="3" type="mini" />Fighter<br/>
          Win a PvP fight.
        </Subtitle>
        </>
        },
        /////////////////////////////////////////////////////////////
        {id:'2', sub: false, button: "Livestreams", content:
        <>
        <Title>
          🎭 Our streams
        </Title><br/>
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
        },
        {id:'3', sub: false, button: "Guilds", content:
        <>
        <Title>
          🏰 <b>Guilds</b> and <b>clans</b>
        </Title><br/>
        <Subtitle>
          For now, we have only one guild in the game we play the most.<br/>
          <a href="/wiki?navTo=4"><Button><Subtitle>
              <div className="logo-flag"></div> <b>The Elder Scrolls Online</b>
          </Subtitle></Button></a>
        </Subtitle><br />
        <Subtitle>
          You can create your own guild named <b>Virbound</b> in any other game.<br />
          Just notify our <i>Guildmaster's</i> on our <a href="https://discord.gg/rMhqK6BrBZ" target="_blank"><IQ>Discord server</IQ></a>.<br />
          Also, your guild must follow our <a href="/wiki?navTo=99"><IQ>rules</IQ></a>.
        </Subtitle><br/>
        <Quote>
          Here is small tip for you.<br/>
          You can use our short list of rules for your guild:
          <ul>
            <li>Every User can speak language they want to.</li>
            <li>We don't support conversation about politics, religions or nationalities.</li>
            <li>Be respectful to other users of Community.</li>
          </ul>
        </Quote>
        </>
        },
        /////////////////////////////////////////////////////////////
        {id:'4', sub: true, button: "TES: Online", content:
        <>
        <Title>
          <div className="logo-flag"></div> <b>Virbound</b>
        </Title>
        <Subtitle>
          The Elder Scrolls Online
        </Subtitle><br/>
        <Subtitle>
          There we have a small guild with a clan-hall that has everything you need.<br/>
          The link to the hall is in the guild description inside the game.
        </Subtitle><br/>
        <Subtitle>
          The guild participates in our events.<br />
          You can check out current and upcoming events on the <a href="/wiki?navTo=6"><IQ>events</IQ></a> page.
        </Subtitle>
        </>
        },
        /////////////////////////////////////////////////////////////
        {id:'99', sub: false, button: "Rules", content:
        <>
        <Title>
          Community Rules
        </Title>
        <Subtitle>0. Terms</Subtitle>
        <ul>
          <li>When we say "<b>Community</b>" we mean this website (https://virbound.com), and all funtionality, services and content we provide. 
          We also refer to Community as "<b>we</b>", "<b>us</b>" and "<b>our</b>".</li>
          <li>When we say "<b>User</b>" we mean a user that using the Community.</li>
          <li>When we say "<b>Rules</b>" we mean these rules.</li>
        </ul><br/>
        <Subtitle>1. General</Subtitle>
        <ul>
          <li>This Rules is a public offer. By accessing the Services, the User is deemed to have acceded to this Rules.</li>
          <li>A User who does not agree with the Rules is obliged to stop using the Community.</li>
          <li>The administration of the Community has the right to unilaterally change the terms of this Rules at any time without noticing.</li>
          <li>By violating the Rules access to the Community can be restricted.</li>
        </ul><br/>
        <Subtitle>2. Language</Subtitle>
        <ul>
          <li>Official language of Community is English.</li>
          <li>But every User can speak language they want to.</li>
        </ul><br/>
        <Subtitle>3. Communication</Subtitle>
        <ul>
          <li>We don't support conversation about politics, religions or nationalities.</li>
          <li>Be respectful to other users of Community.</li>
        </ul><br/>
        <Subtitle>4. Content</Subtitle>
        <ul>
          <li>Administration of Community is not responsible for all User generated content such as text, images, videos, music and sounds.</li>
          <li>All User generated content (text, images, videos, music and sounds) must comply with the Community Rules.</li>
        </ul><br/><br/>
        <div style={{opacity: 0.5}}>
          <Subtitle>
            Intellectual Property Notice
          </Subtitle>
          <ul>
            <li><b>The Elder Scrolls</b> is a trademark or registered trademark of ZeniMax Media Inc.</li>
            <li><b>Minecraft</b> is a trademark or registered trademark of Mojang Synergies AB.</li>
            <li><b>Discord</b> is a trademark or registered trademark of Discord Inc.</li>
            <li><b>Twitch</b> is a trademark or registered trademark of Twitch Interactive, Inc.</li>
            <li><b>Telegram</b> is a trademark or registered trademark of Telegram FZ-LLC.</li>
          </ul>
        </div>
        </>
        }
        /////////////////////////////////////////////////////////////
    ];