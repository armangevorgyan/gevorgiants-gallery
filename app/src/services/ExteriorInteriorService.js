import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import {ExteriorInteriors} from 'configs/gallery/exterior-interior';


class ExteriorInteriorService extends GalleryGatewayServerConnector {
  constructor() {
    super('/exteriors-interiors');
  }

  getExteriorsInteriorsList() {
    return Promise.resolve({
      success: true,
      response: {
        grid: ExteriorInteriors,
        totalCount: ExteriorInteriors.length
      },
      errors: []
    });
  }

}


export default new ExteriorInteriorService();
