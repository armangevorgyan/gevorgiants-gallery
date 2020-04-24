import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import generalActions     from 'store/general/generalActions';
import publicationActions from 'store/publication/publicationActions';

import translate from 'helpers/translate';

import PageCenterLoader from 'components/shared/PageCenterLoader/PageCenterLoader';
import Flex             from 'components/common/Flex/Flex';
import PageTitle        from 'components/shared/PageTitle/PageTitle';
// import ImagesGrid       from 'components/shared/ImagesGrid/ImagesGrid';

import './PublicationContainer.scss';
import Lightbox from 'components/common/LightBox/Lightbox';
// import Lightbox         from 'react-lightbox-component';

@connect(
  state => ({
    isRequesting: state.publication.isRequesting,
    publicationsList: state.publication.publicationsList,
    totalCount: state.publication.totalCount
  }),
  dispatch => ({
    setPageTitle: (pageTitle) => dispatch(generalActions.setPageTitle(pageTitle)),
    getPublicationsList: () => dispatch(publicationActions.getPublicationsList()),
    resetPublicationStore: () => dispatch(publicationActions.resetPublicationStore())
  }),
)
class PublicationContainer extends Component {
  constructor(props) {
    super(props);

    props.getPublicationsList();
  }

  componentDidMount() {
    const {setPageTitle} = this.props;
    setPageTitle(translate('PAGE_TITLE.PUBLICATIONS'));
  }

  componentWillUnmount() {
    this.props.resetPublicationStore();
  }

  render() {
    const {
      isRequesting,
      publicationsList,
    } = this.props;

    if (isRequesting) {
      return <PageCenterLoader />;
    }

    return <Fragment>
      <PageTitle title={translate('PAGE_TITLE.PUBLICATIONS')} />
      <Flex
        width={'100%'}
        className={'PublicationContainer'}
        justify={'center'}
        align={'center'}
        column
      >
        <Lightbox images={publicationsList} />
        {/*<ImagesGrid imagesList={publicationsList} />*/}
      </Flex>
    </Fragment>;
  }
}


export default PublicationContainer;
