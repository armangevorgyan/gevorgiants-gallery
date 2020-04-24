import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import generalActions from 'store/general/generalActions';

import translate from 'helpers/translate';

import PageCenterLoader from 'components/shared/PageCenterLoader/PageCenterLoader';
import Flex             from 'components/common/Flex/Flex';
import PageTitle        from 'components/shared/PageTitle/PageTitle';

import './AboutContainer.scss';


@connect(
  state => ({
  }),
  dispatch => ({
    setPageTitle: (pageTitle) => dispatch(generalActions.setPageTitle(pageTitle))
  }),
)
class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {setPageTitle} = this.props;
    setPageTitle('Home');

  }

  componentWillUnmount() {
    // this.props.resetGalleryStore();
  }

  render() {
    const {
      isRequesting,
    } = this.props;

    if (isRequesting) {
      return <PageCenterLoader />;
    }

    return <Fragment>
      <PageTitle title={translate('PAGE_TITLE.ABOUT')} />
      <Flex
        width={'100%'}
        className={'AboutContainer'}
        column
      >
        <Flex
          width={'100%'}
          spaces={['mt-4']}
          align={'center'}
          justify={'center'}
        >
          <Flex xs={12} row wrap>
            <Flex xs={12} lg={4}>

            </Flex>
            <Flex xs={12} lg={8}></Flex>

          </Flex>
        </Flex>
      </Flex>
    </Fragment>;
  }
}


export default AboutContainer;
