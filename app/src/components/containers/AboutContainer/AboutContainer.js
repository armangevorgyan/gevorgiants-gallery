import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import generalActions from 'store/general/generalActions';

import translate from 'helpers/translate';

import PageCenterLoader from 'components/shared/PageCenterLoader/PageCenterLoader';
import Flex             from 'components/common/Flex/Flex';
import PageTitle        from 'components/shared/PageTitle/PageTitle';

import Biography   from './Biography';
import Exhibitions from './Exhibitions';
import AuthorImage from './AuthorImage';
import Contact     from './Contact';

import './AboutContainer.scss';


@connect(
  state => ({}),
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
    setPageTitle('PAGE_TITLE.ABOUT');

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
        spaces={['pl-4', 'pr-4']}
        column
      >

        <Flex xs={12} row wrap>
          <Flex
            column
            xs={12}
            md={6}
            lg={8}
          >
            <Exhibitions />
          </Flex>
          <Flex
            column
            xs={12}
            md={6}
            lg={4}
            align={'center'}
            // justify={'center'}
          >
            <AuthorImage />
            <Biography />
            <Contact />
          </Flex>
        </Flex>
      </Flex>
    </Fragment>;
  }
}


export default AboutContainer;
