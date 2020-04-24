import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import {Sculptures}                  from 'configs/gallery/sculpture';


class SculptureService extends GalleryGatewayServerConnector {
  constructor() {
    super('/sculptures');
  }

  getSculpturesList() {
    return Promise.resolve({
      success: true,
      response: {
        grid: Sculptures,
        totalCount: Sculptures.length
      },
      errors: []
    });
  }

}


export default new SculptureService();
