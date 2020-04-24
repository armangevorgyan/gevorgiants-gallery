class Device {
  //region Devices
  isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  isTablet() {

  }

  isDesktop() {

  }
  //endregion

  //region Browsers
  isSafari() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') !== -1) {
      return !(ua.indexOf('chrome') > -1);
    }
  }

  isFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }

  isChrome() {

  }

  isIE() {
    return (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)));
  }
  //endregion

  //region OS
  isIOS() {

  }

  isWindows() {

  }

  isMac() {

  }
  //endregion

  //region ScreenType
  isRetina() {
    return (
      (
        window.matchMedia
        && (
          window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches
          || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches
        )
      )
      || (window.devicePixelRatio && window.devicePixelRatio > 1.3)
    );
  }
  //endregion
}

export default new Device();
