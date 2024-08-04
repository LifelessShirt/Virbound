import { useEffect, useState } from 'react';
import { ContentBlock } from '../../Components/ContentBlock';
import { AboutContent } from './AboutContent';
import NavigationPage, { NavigationMenu, NavigationContent} from '../../Components/NavigationPage/NavigationPage';
import { Button } from '../../Components/Button';
import Style from '../../Components/NavigationPage/NavigationPage.module.css';

function About() {

  const url = new URL(document.location.toString()).searchParams;
  const navTo = Number(url.get('navTo')) || undefined;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const arr:{id:string, button:string, content:JSX.Element}[] = AboutContent;
  const [content, setContent] = useState<{id:string, button:string, content:JSX.Element} | undefined>(arr[navTo ? navTo : 0]);
  const showClick = (id:string) => {
    setContent(arr.find(item => item.id === id));
    setMobileMenuOpen(false);
  }
  return (
    <NavigationPage>
      <NavigationMenu>
        {arr.map(item => (
          <button className={` ${Style.button} ${content?.id === item.id && Style.selectedNavMenu}`} onClick={() => showClick(item.id)}>{item.button}</button>
        ))}
      </NavigationMenu>
      <NavigationContent state={mobileMenuOpen}>
        <button className={Style.mobileOpener} onClick={() => setMobileMenuOpen(true)}>Navigation</button>
        {content?.content}
      </NavigationContent>
    </NavigationPage>
  );
}

export default About;
