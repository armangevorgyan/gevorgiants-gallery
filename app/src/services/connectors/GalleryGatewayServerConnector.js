import {fetch}                 from 'whatwg-fetch';
import AbstractServerConnector from './AbstractServerConnector';

import authHelper            from 'helpers/authHelper';
import getApiEndpoint        from 'helpers/apiEndpoint';
import {objectToQueryString} from 'helpers/url';
import {getCurrentLanguage}  from 'helpers/translate';

import {
  eFailedToFetch,
  eFailedToParse,
  e400s,
  e500s,
  eNotFound,
  eBeforeRequest,
  eAfterRequest,
} from 'helpers/apiEventHandler';


const apiEndpoint = getApiEndpoint();


export default class GalleryGatewayServerConnector extends AbstractServerConnector {
  constructor(resource) {
    super();
    this.resource = resource;
  }

  get = (route, data, headers) => this.request(route, 'GET', data, headers);

  put = (route, data, headers) => this.request(route, 'PUT', data, headers);

  post = (route, data, headers, json) => this.request(route, 'POST', data, headers, json);

  delete = (route, data, headers) => this.request(route, 'DELETE', data, headers);

  static handleResponseStatus(response) {
    if ( response.status === 200 ) {
      return response;
    }

    if ( response.status === 401 || response.status === 403 ) {
      dispatchEvent(e400s);
      return response;
    }

    if (response.status === 400 || response.status === 404 || response.status === 405 ) {
      dispatchEvent(eFailedToFetch);
    }

    if ( response.status >= 500 && response.status <= 599 ) {
      dispatchEvent(e500s);
    }

    throw response.status;
  }

  static async handleResponseRawBody(response) {
    try {
      return {
        ...(await response.json()),
        headers: Object.fromEntries(response.headers)
      };
    } catch (e) {
      throw 'FAILED_JSON_PARSE';
    }
  }

  static handleResponseBody(response) {
    if ( response?.errors?.includes('NOT_FOUND') ) {
      dispatchEvent(eNotFound);
    }
    return response;
  }

  getPrefix = () => {
    return '/api';
  };


  getToken = () => {
    return authHelper.getToken();
  };


  request(url = '', method, data = {}, headers = {}, json = true) {
    let requestOptions = {
      method,
    };

    let queryParams = '';

    if ( method !== 'GET' ) {
      requestOptions.body = json ? JSON.stringify(data) : data;
    } else {
      let paramString = objectToQueryString(data);
      if ( paramString ) {
        queryParams += '?' + paramString;
      }
    }

    requestOptions.headers = {};
    const token = this.getToken();
    if ( token ) {
      requestOptions.headers['X-AUTH-TOKEN'] = 'Bearer ' + token;
    }

    const language = getCurrentLanguage();
    if ( language ) {
      requestOptions.headers['Language'] = language.toLowerCase();
    }
    if ( json ) {
      requestOptions.headers['Content-Type'] = 'application/json';
    }

    requestOptions.headers['Cache-Control'] = 'no-cache';
    requestOptions.headers['Pragma'] = 'no-cache';

    for ( let headerKey in headers ) {
      requestOptions.headers[headerKey] = headers[headerKey];
    }

    const endpoint = apiEndpoint + this.getPrefix() + this.resource + url + queryParams;
    dispatchEvent(eBeforeRequest);

    requestOptions = { ...requestOptions, credentials: 'include' };

    return fetch(endpoint, requestOptions)
      .then(GalleryGatewayServerConnector.handleResponseStatus)
      .then(GalleryGatewayServerConnector.handleResponseRawBody)
      .then(GalleryGatewayServerConnector.handleResponseBody)
      .catch(error => {
        if ( error === 'FAILED_JSON_PARSE' ) {
          dispatchEvent(eFailedToParse);
        } else if ( isNaN(error) ) {
          dispatchEvent(eFailedToFetch);
        }
        throw error;
      })
      .finally(() => {
        dispatchEvent(eAfterRequest);
      });
  }

  uploadLargeFile(url, formData, headers = {}, onProgress, onStart) {
    return new Promise((res, rej) => {
      let endpoint = apiEndpoint + this.getPrefix();

      if ( typeof LARGE_FILE_ENDPOINT !== 'undefined' ) {
        endpoint = LARGE_FILE_ENDPOINT;
      }
      endpoint = endpoint + this.resource + url;


      const xhr = new XMLHttpRequest();
      xhr.open('post', endpoint);

      /*Set Headers*/
      const token = this.getToken();
      if ( token ) {
        xhr.setRequestHeader('X-AUTH-TOKEN', 'Bearer ' + token);
      }
      const language = getCurrentLanguage();
      if ( language ) {
        xhr.setRequestHeader('Language', language.toLowerCase());
      }
      xhr.setRequestHeader('Cache-Control', 'no-cache');
      xhr.setRequestHeader('Pragma', 'no-cache');
      for ( var k in headers || {} ) {
        xhr.setRequestHeader(k, headers[k]);
      }
      /*end Set Headers*/

      dispatchEvent(eBeforeRequest);

      xhr.onload = e => {
        try {
          GalleryGatewayServerConnector.handleResponseStatus({ status: xhr.status });

          const responseBody = JSON.parse(e.target.responseText);
          GalleryGatewayServerConnector.handleResponseBody(responseBody);
          res(responseBody);
        } catch (e) {
          dispatchEvent(eFailedToParse);
          rej(e);
        }
      };

      xhr.onerror = (e) => {
        if ( isNaN(e) ) {
          dispatchEvent(eFailedToFetch);
        }
        rej(e);
      };

      if ( xhr.upload && onProgress ) {
        xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
      }

      xhr.send(formData);
      onStart && onStart(xhr);
    });
  }
}
