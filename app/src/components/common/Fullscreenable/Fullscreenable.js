import React, {useEffect, useRef, useState} from 'react';

import './Fullscreenable.scss';

const Fullscreenable = ({children}) => {
  const rootElRef = useRef(null);

  const [isFullscreenMode, setIsFullscreenMode] = useState(!!document.fullscreenElement);

  const onFullscreenChange = () => {
    setIsFullscreenMode(document.fullscreenElement === rootElRef.current);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  const enterFullscreen = () => {
    if (rootElRef.current) {
      rootElRef.current.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    document.exitFullscreen();
  };

  return <span
    ref={rootElRef}
    className={'Fullscreenable'}
  >
    {children({
      isFullscreenMode,
      exitFullscreen,
      enterFullscreen
    })}
  </span>;

};

export default Fullscreenable;
