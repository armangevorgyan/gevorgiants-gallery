const loadScript = url => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function () {
    resolve(url);
  };
  script.onerror = function () {
    reject();
  };
  script.src = url;
  document.getElementsByTagName('body')[0].appendChild(script);
});

export default loadScript;