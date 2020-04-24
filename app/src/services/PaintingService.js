import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import {Paintings}                   from 'configs/gallery/painting';


class PaintingService extends GalleryGatewayServerConnector {
  constructor() {
    super('/paintings');
  }

  getPaintingList() {
    return Promise.resolve({
      success: true,
      response: {
        grid: Paintings,
        totalCount: Paintings.length
      },
      errors: []
    });
  }

}


export default new PaintingService();
