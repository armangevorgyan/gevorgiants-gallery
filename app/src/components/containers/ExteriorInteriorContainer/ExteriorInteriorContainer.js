import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import generalActions          from 'store/general/generalActions';
import exteriorInteriorActions from 'store/exteriorInterior/exteriorInteriorActions';

import translate from 'helpers/translate';

import PageCenterLoader from 'components/shared/PageCenterLoader/PageCenterLoader';
import Flex             from 'components/common/Flex/Flex';
import PageTitle        from 'components/shared/PageTitle/PageTitle';
import Lightbox         from 'components/common/LightBox/Lightbox';
// import ImagesGrid       from 'components/shared/ImagesGrid/ImagesGrid';

import './ExteriorInteriorContainer.scss';
import FacebookMetaTags from 'components/shared/FacebookMetaTags/FacebookMetaTags';


@connect(
  state => ({
    isRequesting: state.exteriorInterior.isRequesting,
    exteriorInteriorList: state.exteriorInterior.exteriorInteriorList,
    totalCount: state.exteriorInterior.totalCount
  }),
  dispatch => ({
    setPageTitle: (pageTitle) => dispatch(generalActions.setPageTitle(pageTitle)),
    getExteriorsInteriorsList: () => dispatch(exteriorInteriorActions.getExteriorsInteriorsList()),
    resetExteriorsInteriorsStore: () => dispatch(exteriorInteriorActions.resetExteriorsInteriorsStore())
  }),
)
class ExteriorInteriorContainer extends Component {
  constructor(props) {
    super(props);

    props.getExteriorsInteriorsList();
  }

  componentDidMount() {
    const {setPageTitle} = this.props;
    setPageTitle(translate('PAGE_TITLE.EXTERIORS_INTERIORS'));
  }

  componentWillUnmount() {
    this.props.resetExteriorsInteriorsStore();
  }

  render() {
    const {
      isRequesting,
      exteriorInteriorList,
    } = this.props;

    if (isRequesting) {
      return <PageCenterLoader />;
    }

    return <Fragment>
      <PageTitle title={translate('PAGE_TITLE.EXTERIORS_INTERIORS')} />
      <FacebookMetaTags
        url={'http://www.gevorginats.com/exteriors-interiors'}
        title={translate('PAGE_TITLE.EXTERIORS_INTERIORS')}
      />
      <Flex
        width={'100%'}
        className={'ExteriorInteriorContainer'}
        justify={'center'}
        align={'center'}
        column
      >
        <Lightbox images={exteriorInteriorList} />
        {/*<ImagesGrid imagesList={exteriorInteriorList} />*/}
      </Flex>
    </Fragment>;
  }
}


export default ExteriorInteriorContainer;
