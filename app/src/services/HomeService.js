import GalleryGatewayServerConnector from 'services/connectors/GalleryGatewayServerConnector';
import {Banners}                     from 'configs/gallery/banner';
import {CategoriesPreview}           from 'configs/gallery/categoriesPreview';


class HomeService extends GalleryGatewayServerConnector {
  constructor() {
    super('/home');
  }

  getBannersList() {
    return Promise.resolve({
      success: true,
      response: {
        grid: Banners,
        totalCount: Banners.length
      },
      errors: []
    });
  }

  getCategoriesPreviews() {
    return Promise.resolve({
      success: true,
      response: {
        grid: CategoriesPreview,
        totalCount: CategoriesPreview.length
      },
      errors: []
    });
  }


}


export default new HomeService();
