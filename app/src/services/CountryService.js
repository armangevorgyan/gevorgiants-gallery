import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import  Countries                    from  'configs/countries';

class CountryService extends GalleryGatewayServerConnector {
  constructor() {
    super('/countries');
  }

  getAll() {
    return Promise.resolve({
      errors: {},
      success: true,
      response : Countries
    });
  }
}

export default new CountryService();
