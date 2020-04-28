import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import generalActions   from 'store/general/generalActions';
import sculptureActions from 'store/sculpture/sculptureActions';

import translate from 'helpers/translate';

import PageCenterLoader from 'components/shared/PageCenterLoader/PageCenterLoader';
import Flex             from 'components/common/Flex/Flex';
import PageTitle        from 'components/shared/PageTitle/PageTitle';
import Lightbox         from 'components/common/LightBox/Lightbox';
// import ImagesGrid       from 'components/shared/ImagesGrid/ImagesGrid';

import './SculptureContainer.scss';


@connect(
  state => ({
    isRequesting: state.sculpture.isRequesting,
    sculpturesList: state.sculpture.sculpturesList,
    totalCount: state.sculpture.totalCount
  }),
  dispatch => ({
    setPageTitle: (pageTitle) => dispatch(generalActions.setPageTitle(pageTitle)),
    getSculpturesList: () => dispatch(sculptureActions.getSculpturesList()),
    resetSculptureStore: () => dispatch(sculptureActions.resetSculptureStore())
  }),
)
class SculptureContainer extends Component {
  constructor(props) {
    super(props);

    props.getSculpturesList();
  }

  componentDidMount() {
    const {setPageTitle} = this.props;
    setPageTitle(translate('PAGE_TITLE.SCULPTURES'));
  }

  componentWillUnmount() {
    this.props.resetSculptureStore();
  }

  render() {
    const {
      isRequesting,
      sculpturesList,
    } = this.props;

    if (isRequesting) {
      return <PageCenterLoader />;
    }

    return <Fragment>
      <PageTitle title={translate('PAGE_TITLE.SCULPTURES')} />
      <Flex
        width={'100%'}
        className={'SculptureContainer'}
        justify={'center'}
        align={'center'}
        column
      >
        <Lightbox images={sculpturesList} />
        {/*<ImagesGrid imagesList={sculpturesList} />*/}
      </Flex>
    </Fragment>;
  }
}


export default SculptureContainer;
