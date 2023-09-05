import React from 'react';
import { ContentBlock } from '../../Components/ContentBlock';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';

function Minebound() {
  return ( <>
    <div className="Minebound-page">
      <div className="fullSizeBlock"><div className="fullSizeBlockInner">
        <Title>Абоба</Title>
      </div></div>
      <ContentBlock>
        <Title>🤔 Що є Вірбаунд?</Title>
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
    </div>
  </>
  );
}

export default Minebound;
