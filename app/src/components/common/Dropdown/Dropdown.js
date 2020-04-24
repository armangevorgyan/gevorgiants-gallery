import React, {Component} from 'react';
import PropTypes          from 'prop-types';
import onClickOutside     from 'react-onclickoutside';

import Flex from 'components/common/Flex/Flex';
import Icon from 'components/common/Icon/Icon';
import Link from 'components/common/Link/Link';
import Text from 'components/common/Text/Text';

import './Dropdown.scss';


class Dropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {isMenuOpen: false};
  }

  handleClickOutside = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  };

  onClick = (e, item) => {
    if (item.url) {
      return undefined;
    } else {
      e.preventDefault();
      e.stopPropagation();
      item.onClick && item.onClick(e);
    }
  };

  render() {
    const {
      menuItems,
      label,
      height
    } = this.props;
    const {isMenuOpen} = this.state;

    return (
      <Flex
        className={`Dropdown ${isMenuOpen ? 'open' : 'close'}`}
        height={height}
        justify={'center'}
        column
      >
        <Flex
          className={'Dropdown_header'}
          align={'center'}
          onClick={this.toggleMenu}
        >
          {label}

          <Flex className={'Dropdown_header_arrow'}>
            {<Icon
              size={20}
              icon={'arrow-down'}
              color={'neutral-900'}
              className={isMenuOpen ? '' : ''}
            />}
          </Flex>
        </Flex>

        <Flex
          className={'menu-items'}
          column
          xs={12}
        >
          {menuItems.map((item) => (
            <Flex
              className="menu-item"
              key={item.id}
              align={'center'}
              spaces={['mt-2', 'mb-3']}
              onClick={this.toggleMenu}
            >
              <Link
                className={'Dropdown-item-link'}
                to={item.url ? item.url : '#'}
                onClick={e => this.onClick(e, item)}
                testId={item.testId}
                color={'neutral-900'}
              >
                <Flex align={'center'}>
                  {item.icon && <Icon icon={item.icon} color={item.iconColor} size={24} className={'mr-4'} />}
                  <Text size={'scale-6'}>{item.title}</Text>
                </Flex>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }
}

Dropdown.propTypes = {
  label: PropTypes.node,
  items: PropTypes.array,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default onClickOutside(Dropdown);

// Menu Item example
// menuItems: [
//   {
//     id: 0,
//     title: 'Profile settings',
//     icon: 'account-settings',
//     iconColor: 'secondary',
//     url: '/register',
//   },
//   {
//     id: 1,
//     title: 'Log out',
//     icon: 'logout',
//     iconColor: 'secondary',
//     onClick: this.handleOnClick,
//   },
// ]
//
//<Dropdown
//   label={<Text>Label</Text>}
//   menuItems={this.state.menuItems}
// />
//
//

