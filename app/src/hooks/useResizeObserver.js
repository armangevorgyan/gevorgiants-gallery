import React, {useEffect, useState} from 'react';


const useResizeObsrver = () => {
  const [breakpoint, setBreakpoint] = useState(window.breakpoint);

  const doSetBreakpoint = () => setBreakpoint(window.breakpoint);

  useEffect(() => {
    window.addEventListener('onBreakpointChange', doSetBreakpoint);

    return () => {
      window.removeEventListener('onBreakpointChange', doSetBreakpoint);
    };
  }, []);

  return breakpoint;
};

const withResizeObserverHOC = Component => props => {
  const breakpoint = useResizeObsrver();

  return <Component
    {...props}
    breakpoint={breakpoint}
  />;
};

export {withResizeObserverHOC};
export default useResizeObsrver;
