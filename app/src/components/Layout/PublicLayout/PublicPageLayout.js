import React from 'react';

import Flex from 'components/common/Flex/Flex';
import './PublicPageLayout.scss';


const withPublicLayout = Component => class PublicPageLayout extends React.Component {

  render() {
    const classNames = ['PublicPageLayout-Fluid'];

    return (
      <Flex
        className={classNames.join(' ')}
        justify={'space-between'}
      >

        <Flex
          className={'PublicPageLayout'}
          row
          container
          justify={'center'}
        >
          <Flex
            width={'100%'}
            className={'Block-Wrapper'}
          >
            <Component {...this.props} />
          </Flex>
        </Flex>
      </Flex>
    );
  }
};

export default withPublicLayout;
