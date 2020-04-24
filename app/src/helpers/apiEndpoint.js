import {API_ENDPOINT} from 'configs/configs';


const isLocal = () => {
  return window.location.hostname === 'localhost' || window.location.hostname.includes('.local');
};

const apiEndpoint = () => {
  let host = window.location.origin;

  if (isLocal()) {
    host = API_ENDPOINT;
  }
  return host;
};

const getHostWithoutProtocol = () => {
  return 'gallery.com';
};

const asset = file => {
  return `/assets/${file}`;
};
const assetGallery = file => {
  return `/assets/gallery/${file}`;
};


export {
  isLocal,
  getHostWithoutProtocol,
  asset,
  assetGallery
};
export default apiEndpoint;
