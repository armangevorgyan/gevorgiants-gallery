import React   from 'react';


import './PageCenterLoader.scss';
import Flex    from 'components/common/Flex/Flex';
import Spinner from 'components/common/Spinner/Spinner';

const PageCenterLoader = () => (
  <Flex
    className={'PageCenterLoader'}
    align={'center'}
    justify={'center'}
  >
    <Flex
      className={'ie_centerLoader'}
      align={'center'}
      justify={'center'}
    >
      <Spinner
        size={100}
      />
    </Flex>
  </Flex>
);

const RootCenterLoader = () => (
  <Flex
    xs={12}
    height={'100vh'}
    align={'center'}
    justify={'center'}
    spaces={['pt-10', 'pb-10']}
  >
    <PageCenterLoader />
  </Flex>
);

export { RootCenterLoader };
export default PageCenterLoader;
