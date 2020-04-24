import React from 'react';

import device from 'helpers/device';
import Flex         from 'components/common/Flex/Flex';


const LayoutWrapper = ({className, children}) => {
  return device.isIE() ? <div
    className={className}
  >
    {children}
  </div> : <Flex
    className={className}
    align={'initial'}
    column
  >
    {children}
  </Flex>;
};

export default LayoutWrapper;
