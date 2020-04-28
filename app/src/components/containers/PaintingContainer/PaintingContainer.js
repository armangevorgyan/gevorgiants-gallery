import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import generalActions  from 'store/general/generalActions';
import paintingActions from 'store/painting/paintingActions';

import translate from 'helpers/translate';

import Flex             from 'components/common/Flex/Flex';
import PageCenterLoader from 'components/shared/PageCenterLoader/PageCenterLoader';
import PageTitle        from 'components/shared/PageTitle/PageTitle';
import Lightbox         from 'components/common/LightBox/Lightbox';
// import ImagesGrid       from 'components/shared/ImagesGrid/ImagesGrid';

import './PaintingContainer.scss';


@connect(
  state => ({
    isRequesting: state.painting.isRequesting,
    paintingsList: state.painting.paintingsList,
    totalCount: state.painting.totalCount
  }),
  dispatch => ({
    setPageTitle: (pageTitle) => dispatch(generalActions.setPageTitle(pageTitle)),
    getPaintingList: () => dispatch(paintingActions.getPaintingList()),
    resetPaintingsStore: () => dispatch(paintingActions.resetPaintingsStore())
  }),
)
class PaintingContainer extends Component {
  constructor(props) {
    super(props);
    props.getPaintingList();
  }

  componentDidMount() {
    const {setPageTitle} = this.props;
    setPageTitle(translate('PAGE_TITLE.PAINTINGS'));

  }

  componentWillUnmount() {
    this.props.resetPaintingsStore();
  }


  render() {
    const {
      isRequesting,
      paintingsList
    } = this.props;

    if (isRequesting) {
      return <PageCenterLoader />;
    }

    return <Fragment>
      <PageTitle title={translate('PAGE_TITLE.PAINTINGS')} />
      <Flex
        width={'100%'}
        className={'PaintingContainer'}
        justify={'center'}
        align={'center'}
        column
      >
        <Lightbox images={paintingsList}/>

        {/*<ImagesGrid imagesList={paintingsList} />*/}
      </Flex>
    </Fragment>;
  }
}


export default PaintingContainer;
