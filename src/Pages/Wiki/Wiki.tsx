import { useEffect, useState } from 'react';
import { ContentBlock } from '../../Components/ContentBlock';
import { WikiContent } from './WikiContent';
import NavigationPage, { NavigationMenu, NavigationContent} from '../../Components/NavigationPage/NavigationPage';
import { Button } from '../../Components/Button';
import Style from '../../Components/NavigationPage/NavigationPage.module.css';
import axios from 'axios';
import Markdown from 'react-markdown';
import { IQ } from '../../Components/InlineQuote/InlineQuote';
import Quote from '../../Components/Quote/Quote';
import { Subtitle } from '../../Components/Subtitle';
import { Title } from '../../Components/Title';

const Wiki = () => {

  const url = new URL(document.location.toString()).searchParams;
  const navTo = Number(url.get('navTo')) || undefined;

  // Mobile menu toggles
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Array get content from WikiContent
  const [array, setArray] = useState<{id:string, sub:string, buttonName:string, content:string}[]>([]);
  // const arr:{id:string, sub:boolean, button:string, content:JSX.Element}[] = WikiContent;
  // Set current visible content
  const [content, setContent] = useState<{id:string, buttonName:string, content:string} | undefined>(array[navTo ? navTo : 1]);
  const showClick = (id:string) => {
    setContent(array.find(item => item.id === id));
    setMobileMenuOpen(false);
  }
  
  useEffect(() => {
    axios.post("https://virbound.com/system/wiki/getAll.php", {
      payload: "remove_this"
    })
    .then((response) => {
      if (!response.data.error) {
        setArray(response.data.array);
        const array:{id:string, sub:string, buttonName:string, content:string}[] = response.data.array;
        // Set current visible content according to $_GET['navTo']
        if (navTo) {
          setContent(array.find(item => item.id == ""+navTo));
        } else {
          setContent(array.find(item => item.id == array[0].id));
        }
      } else {
        // Error
      }
    })
    .catch((error) => {
      // Error
    });
  }, []);

  return (
    <NavigationPage>
      <NavigationMenu>
        {array.map(item => (
          <button className={` ${Style.button} ${item.sub === 'true' ? Style.button_sub : ``} ${content?.id === item.id && Style.selectedNavMenu}`} onClick={() => showClick(item.id)}>{item.buttonName}</button>
        ))}
      </NavigationMenu>
      <NavigationContent state={mobileMenuOpen}>
        <button className={Style.mobileOpener} onClick={() => setMobileMenuOpen(true)}>Navigation</button>
        <Markdown>{content?.content}</Markdown>
      </NavigationContent>
    </NavigationPage>
  );
}

export default Wiki;
