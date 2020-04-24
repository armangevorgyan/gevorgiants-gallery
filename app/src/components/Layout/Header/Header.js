import React        from 'react';
import {withRouter} from 'react-router';

import {withResizeObserverHOC} from 'hooks/useResizeObserver';
import {pushRoute}             from 'helpers/router';
import {asset}                 from 'helpers/apiEndpoint';

import Flex            from 'components/common/Flex/Flex';
import Navigation      from 'components/Layout/Navigation/Navigation';
import BurgerMenu      from 'components/Layout/BurgerMenu/BurgerMenu';
import BackgroundImage from 'components/common/Image/BackgroundImage';
import Text            from 'components/common/Text/Text';
import Translate       from 'components/common/Translate/Translate';
import './Header.scss';


const Header = (props) => {
  const {
    location,
    breakpoint
  } = props;
  return (
    <Flex
      width={'100%'}
      // column
      justify={'space-between'}
      flex={'0 0 auto'}
      className={'Header'}
      height={['sm', 'xs'].includes(breakpoint) ? 50 : 70}
    >
      <Flex
        width={'100%'}
        hidden={{
          sm: 'down'
        }}
      >
        <Navigation location={location} />
      </Flex>
      <Flex
        hidden={{
          md: 'up'
        }}
        height={50}
        align={'center'}
        justify={'space-between'}
        width={'100%'}
      >
        <Flex
          onClick={() => pushRoute('/')}
          spaces={['pl-2']}
          align={'center'}
        >
          <BackgroundImage
            height={35} width={40}
            source={asset('images/logo.png')}
          />
        </Flex>
        <Flex>
          <Text weight={'semibold'}><Translate>MENU.GEVORGIANTS_GALLERY</Translate></Text>
        </Flex>
        <Flex width={40}>
          <BurgerMenu />
        </Flex>
      </Flex>
    </Flex>
  );
};


export default withResizeObserverHOC(withRouter(Header));
