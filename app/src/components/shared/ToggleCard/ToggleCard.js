import Text                         from 'components/common/Text/Text';
import React, {useEffect, useState} from 'react';
import PropTypes                    from 'prop-types';

import Icon from 'components/common/Icon/Icon';
import Flex from 'components/common/Flex/Flex';
import './ToggleCard.scss';


const renderHeader = (header) => {
  return typeof header === 'string' ? <Text size={'scale-5'} color={'primary'}>{header}</Text> : header;
};
const ToggleCard = ({header, footer, children, contentStyles, isCardOpen, isVisible = false}) => {
  const [isOpen, setIsOpen] = useState(isCardOpen || false);
  const contentStyle= {...contentStyles};

  useEffect(() => {
    setIsOpen(isCardOpen);
  }, [isCardOpen]);

  return <Flex
    column
    width={'100%'}
    className={'ToggleCard'}
  >
    {header && <Flex align={'center'} className={'header'} onClick={() => setIsOpen(!isOpen)}>
      <Icon
        icon={isOpen ? 'arrow-down' : 'arrow-right'}
        size={24}
        color={'primary'}
      />
      {renderHeader(header)}
    </Flex>}
    {children  && (isVisible || isOpen) && <Flex spaces={['mt-7']} className={`content ${isOpen ? '': 'd-none'}`} style={contentStyle}>{children}</Flex>}
    {footer && isOpen && <Flex spaces={['mt-7']} className={'footer'}>{footer}</Flex>}
  </Flex>;
};

ToggleCard.propTypes = {
  children: PropTypes.any,
  contentStyles: PropTypes.any,
  footer: PropTypes.any,
  header: PropTypes.any
};

export default ToggleCard;
