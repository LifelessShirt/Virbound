import React from 'react';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';

function Minebound() {
  return ( <>
    <div className="Minebound-page">
      <div className="fullSizeBlock"><div className="fullSizeBlockInner">
        <div className="minebound-logo"></div>
        <Title>MineBound</Title>
        <Subtitle>
          Сервер який дозволяє розкрити твій творчій потенціал
        </Subtitle><br />
        <Button type='focus' customOnClick='copyIP'>Копіювати IP</Button><br />
        Версія 1.20.1 • Ліцензія не обов'язкова
      </div></div>
      <ContentBlock>
        <Title>🚀 Спільні проекти</Title><br/>
        <Subtitle>
          Гравці серверу об'єднуються для реалізації спільних проектів які вони вигадують. І все це назавжди залишиться в історії серверу.
        </Subtitle><br/>
        <Title>🛸 Різномаїтні івенти</Title><br/>
        <Subtitle>
          На сервері доволі часто проводяться івенти, протягом яких можна заробляти незвичайні винагороди та призи.
        </Subtitle><br/>
        <Title>💪 Ком'юніті</Title><br/>
        <Subtitle>
          В нас надзвичайно добре і веселе ком'юніті в якому знайдеться місце кожному, хто поважає інших гравців та готовий привнести щось своє в наш світ.
        </Subtitle>
      </ContentBlock>
      <ContentBlock>
        <Title>🤔 Як отримати доступ?</Title><br/>
        <Subtitle>
        Для отрамання доступу до серверу необхідно купити перепустку на нашому Twitch каналі за бали каналу. Перепустка коштує 20 000 балів. Дарувати або купувати в подарунок заборонено.
        </Subtitle><br/>
        <Button type="focus">Отримати перепустку</Button>
      </ContentBlock>
    </div>
    <Footer />
  </>
  );
}

export default Minebound;
