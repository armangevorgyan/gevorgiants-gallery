import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import  Translations                 from  'configs/translation';

class TranslationService extends GalleryGatewayServerConnector {
  constructor() {
    super('/translations');
  }

  getAll() {
    return Promise.resolve({
      errors: {},
      success: true,
      response : Translations
    });
  }
}

export default new TranslationService();
