import cookieHelper from 'helpers/cookie';
import JWT          from 'jwt-decode';

export default {
  getToken: () => localStorage.getItem('token'),
  setToken: token => {
    cookieHelper.createCookie('x-auth-token', 'Bearer%' + token);
    return localStorage.setItem('token', token);
  },
  removeToken: () => {
    cookieHelper.eraseCookie('x-auth-token');
    return localStorage.removeItem('token');
  },

  isRegistered: () => {
    const token = localStorage.getItem('token');

    if ( !token ) {
      return false;
    }
    if(!cookieHelper.readCookie('x-auth-token')) {
      cookieHelper.createCookie('x-auth-token', 'Bearer%' + token);
    }

    const exposedToken = JWT(token);

    return !!exposedToken.uuid;
  },
};
