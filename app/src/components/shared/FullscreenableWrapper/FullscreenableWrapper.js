import React          from 'react';

import Flex               from 'components/common/Flex/Flex';
import Fullscreenable     from 'components/common/Fullscreenable/Fullscreenable';
import IconWithBackground from 'components/common/IconWithBackground/IconWithBackground';

import './FullscreenableWrapper.scss';

const BackgroundProps = {
  backgroundColor: 'neutral-500',
  borderRadius: 8,
  height: 40,
  width: 40
};

const FullscreenableWrapper = ({children}) => {
  return <Fullscreenable>
    {({isFullscreenMode, exitFullscreen, enterFullscreen}) => (
      <Flex
        className={'FullscreenableWrapper'}
        width={'100%'}
        height={'100%'}
      >
        {children}

        <Flex className={'controls'}>
          {!isFullscreenMode && <IconWithBackground
            backgroundProps={BackgroundProps}
            iconProps={{
              color: 'neutral-white',
              size: 24,
              icon: 'enter-full-screen'
            }}
            onClick={() => enterFullscreen()}
          /> || <IconWithBackground
            backgroundProps={BackgroundProps}
            iconProps={{
              color: 'neutral-white',
              size: 24,
              icon: 'exit-full-screen'
            }}
            onClick={() => exitFullscreen()}
          />}
        </Flex>

        <Flex className={'info'}>
          <IconWithBackground
            backgroundProps={BackgroundProps}
            onClick={e => e.preventDefault()}
            iconProps={{
              color: 'neutral-white',
              size: 24,
              icon: 'drag'
            }}
          />
        </Flex>
      </Flex>
    )}
  </Fullscreenable>;
};

export default FullscreenableWrapper;
