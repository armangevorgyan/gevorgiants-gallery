import React     from 'react';
import PropTypes from 'prop-types';

import {asset}     from 'helpers/apiEndpoint';
import {pushRoute} from 'helpers/router';

import {HeaderMenuItems} from 'configs/headerMenuItems';

import BackgroundImage from 'components/common/Image/BackgroundImage';
import Flex            from 'components/common/Flex/Flex';
import Text            from 'components/common/Text/Text';
import Translate       from 'components/common/Translate/Translate';

import './Navigation.scss';
import Link            from 'components/common/Link/Link';


const Navigation = ({location}) => <Flex
  width={'100%'}
  justify={'space-between'}
  align={'center'}
  spaces={['pr-4', 'pl-4']}
  className={'Navigation'}
>
  <Flex
    onClick={() => pushRoute('/')}
    align={'center'}
    justify={'center'}
  >
    <BackgroundImage
      height={60} width={70}
      source={asset('images/logo.png')}
    />
    <Flex
      spaces={['ml-2']}
      height={60}
      align={'center'}
    >
      <Text><Translate>MENU.GEVORGIANTS_GALLERY</Translate></Text>
    </Flex>
  </Flex>
  <Flex
    justify={'center'}
    flex={'1 0 0 '}
    height={60}
    align={'center'}
  >
    {HeaderMenuItems?.map((menuItem, index) => <Flex
      key={index}
      column
      className={'navigation-menu-item'}
      // onClick={() => pushRoute(menuItem.url)}
    >
      <Link to={menuItem.url}>{menuItem.title}</Link>
      {location.pathname.startsWith(menuItem.url) && <Flex className={'black-line'} />}
    </Flex>)}
  </Flex>
  <Flex
    hidden={{
      md: 'down'
    }} width={218.5}
  />
</Flex>;

export default Navigation;

Navigation.propTypes = {
  location: PropTypes.object.isRequired
};
