export default class AbstractServerConnector {
  get = (route, data) => this.request(route, 'GET', data);

  put = (route, data) => this.request(route, 'PUT', data);

  post = (route, data) => this.request(route, 'POST', data);

  delete = (route, data) => this.request(route, 'DELETE', data);

  /* abstract */ getPrefix = () => {};

  /* abstract */ getToken = () => {};

  /* abstract */ request(url = '', method, data = {}) {};
}
