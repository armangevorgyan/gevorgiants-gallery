import React from 'react';

import Text                    from 'components/common/Text/Text';
import Translate               from 'components/common/Translate/Translate';
import Flex                    from 'components/common/Flex/Flex';

import './Footer.scss';
import {withResizeObserverHOC} from 'hooks/useResizeObserver';


const Footer = ({breakpoint}) => {
  return ['sm', 'xs'].includes(breakpoint) ? null : <Flex
    className={'Footer'}
    column
  >
    <Flex
      width={'100%'}
      spaces={['pt-8', 'pb-3', 'pl-4']}
      className={'FooterBottom'}
      justify={'center'}
    >
      <Text align={'left'} color={'primary'} size={'scale-7'}>
        <Translate data={{year: new Date().getFullYear()}}>MENU.COPYRIGHT</Translate>
      </Text>
    </Flex>
  </Flex>;
};

export default withResizeObserverHOC(Footer);
