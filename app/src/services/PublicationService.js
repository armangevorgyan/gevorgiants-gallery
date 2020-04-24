import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import {Publications}                from 'configs/gallery/publication';


class PublicationService extends GalleryGatewayServerConnector {
  constructor() {
    super('/publications');
  }

  getPublicationsList() {
    return Promise.resolve({
      success: true,
      response: {
        grid: Publications,
        totalCount: Publications.length
      },
      errors: []
    });
  }

}


export default new PublicationService();
