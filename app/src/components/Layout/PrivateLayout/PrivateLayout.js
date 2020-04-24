import React from 'react';

import Flex from 'components/common/Flex/Flex';

import Header        from '../Header/Header';
import Footer        from '../Footer/Footer';
import LayoutWrapper from '../LayoutWrapper';
// import Sidebar       from '../Sidebar/Sidebar';

import './PrivateLayout.scss';


const withPrivateLayout = Component => class PrivateLayout extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <LayoutWrapper className={'PrivateLayout'}>
        <Flex height={'100vh'}>
          <Flex
            height={'100vh'}
            flex={'1 1 auto'}
            column
          >
            <Header />

            <Flex
              flex={'1 1 auto'}
              style={{overflowY: 'auto'}}
              column
            >
              <Flex flex={'1 1 auto'}>
                <Component {...this.props} breakpoint={breakpoint} />
              </Flex>

              <Footer />
            </Flex>
          </Flex>
        </Flex>
      </LayoutWrapper>
    );
  }
};

export default withPrivateLayout;
