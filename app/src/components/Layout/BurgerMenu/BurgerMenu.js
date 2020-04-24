import React        from 'react';
import {withRouter} from 'react-router';

import {asset}           from 'helpers/apiEndpoint';
import {pushRoute}       from 'helpers/router';
import {HeaderMenuItems} from 'configs/headerMenuItems';

import BurgerIcon from './BurgerIcon/BurgerIcon';

import Flex      from 'components/common/Flex/Flex';
import Image     from 'components/common/Image/Image';
import Text      from 'components/common/Text/Text';
import Link      from 'components/common/Link/Link';

import './BurgerMenu.scss';
import Translate from 'components/common/Translate/Translate';


@withRouter
class BurgerMenu extends React.Component {
  state = {
    open: false,
  };

  close = () => {
    this.setState({
      open: false,
    });
  };

  open = () => {
    this.setState({
      open: true,
    });
  };

  toggle = () => {
    this.state.open ? this.close() : this.open();
  };

  render() {
    const {
      open,
    } = this.state;

    return (
      <div className={'BurgerMenu'}>
        <div className={'BurgerMenu-Button'} onClick={this.toggle}>
          <BurgerIcon open={open} />
        </div>

        <div className={`BurgerMenu-Layout ${open ? 'shown' : ''}`}>
          <div className={'BurgerMenu-LeftBar'} onClick={this.close} />
          <div className={'BurgerMenu-Bar'}>
            <Flex
              className={'BurgerMenu-Logo'}
              onClick={() => {
                this.close();
                pushRoute('/');
              }}
            >
              <Image source={asset('images/logo.png')} />
            </Flex>

            <div className={'BurgerMenu-MenuList'}>
              {HeaderMenuItems?.map((menuItem, index) =>
                <div className={'BurgerMenu-MenuLink'} key={index}>
                  <Text>
                    <Link
                      to={menuItem.url}
                      onClick={this.close}
                    >
                      {menuItem.title}
                    </Link>
                  </Text>
                  {location.pathname.startsWith(menuItem.url) && <Flex className={'black-line'} />}
                </div>
              )}
            </div>
            <div className={'BurgerMenu-Footer'}>
              <Text align={'center'} color={'primary'} size={'scale-7'}>
                <Translate data={{year: new Date().getFullYear()}}>MENU.COPYRIGHT</Translate>
              </Text>
            </div>

          </div>
        </div>
      </div>
    );
  }
}


export default BurgerMenu;
