export default () => {
  window.breakpoint = null;

  const onBreakpointChangeEvent = new CustomEvent('onBreakpointChange');

  const calculateCurrentBreakpoint = () => {
    const oldValue = window.breakpoint;
    window.breakpoint =
      window
        .getComputedStyle(document.querySelector('body'), ':before')
        .getPropertyValue('content')
        .replace(/\"/g, '');

    if (oldValue !== window.breakpoint) {
      dispatchEvent(onBreakpointChangeEvent);
    }
  };

  calculateCurrentBreakpoint();

  window.addEventListener('resize', calculateCurrentBreakpoint);
};
