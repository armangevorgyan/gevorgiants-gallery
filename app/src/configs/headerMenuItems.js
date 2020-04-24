import React     from 'react';
import Translate from 'components/common/Translate/Translate';
import Text      from 'components/common/Text/Text';


export const HeaderMenuItems = [
  {
    id: 0,
    title: <Text><Translate>MENU.HOME</Translate></Text>,
    url: '/home',
  },
  {
    id: 1,
    title: <Text><Translate>MENU.SCULPTURES</Translate></Text>,
    url: '/sculptures'
  },
  {
    id: 2,
    title: <Text><Translate>MENU.PAINTINGS</Translate></Text>,
    url: '/paintings'
  },
  {
    id: 3,
    title: <Text><Translate>MENU.EXTERIORS_INTERIORS</Translate></Text>,
    url: '/exteriors-interiors'
  },
  {
    id: 4,
    title: <Text><Translate>MENU.PUBLICATIONS</Translate></Text>,
    url: '/publications'
  },
  {
    id: 5,
    title: <Text><Translate>MENU.ABOUT</Translate></Text>,
    url: '/about'
  }
];
