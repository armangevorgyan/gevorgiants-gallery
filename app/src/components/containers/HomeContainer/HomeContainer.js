import React, {Component, Fragment} from 'react';
import {connect}                    from 'react-redux';

import {Carousel}              from 'react-responsive-carousel';
import {withResizeObserverHOC} from 'hooks/useResizeObserver';
import generalActions          from 'store/general/generalActions';
import homeActions             from 'store/home/homeActions';
import translate               from 'helpers/translate';
import {pushRoute}             from 'helpers/router';


import Text                                 from 'components/common/Text/Text';
import PageCenterLoader                     from 'components/shared/PageCenterLoader/PageCenterLoader';
import Flex                                 from 'components/common/Flex/Flex';
import BackgroundImage                      from 'components/common/Image/BackgroundImage';
import PageTitle                            from 'components/shared/PageTitle/PageTitle';
import Card, {CardBackgroundImageComponent} from 'components/common/Card/Card';
import ArrowDown                            from 'components/common/ArrowDown/ArrowDown';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomeContainer.scss';


@connect(
  state => ({
    banners: state.home.banners,
    categories: state.home.categories,
  }),
  dispatch => ({
    setPageTitle: (pageTitle) => dispatch(generalActions.setPageTitle(pageTitle)),
    getBannersList: () => dispatch(homeActions.getBannersList()),
    getCategoriesPreviews: () => dispatch(homeActions.getCategoriesPreviews()),
    resetHomeStore: () => dispatch(homeActions.resetHomeStore())
  }),
)
class HomeContainer extends Component {

  constructor(props) {
    super(props);
    props.getBannersList();
    props.getCategoriesPreviews();
  }

  componentDidMount() {
    const {setPageTitle} = this.props;
    setPageTitle('Home');

  }

  componentWillUnmount() {
    this.props.resetHomeStore();
  }

  render() {
    const {
      breakpoint,
      banners,
      categories
    } = this.props;

    if (banners.isRequesting && categories.isRequesting) {
      return <PageCenterLoader />;
    }
    return <Fragment>
      <PageTitle title={translate('PAGE_TITLE.HOME')} />
      <Flex
        width={'100%'}
        className={'HomeContainer'}
        column
      >
        <Flex
          width={'100%'}
          align={'center'}
          justify={'center'}
        >
          <Carousel
            showThumbs={false}
            autoPlay
            interval={2000}
            infiniteLoop
            useKeyboardArrows
          >
            {banners.bannersList?.map((item, index) => (
              <Flex
                key={index} width={'100%'}
                height={['xs', 'sm'].includes(breakpoint) ? window.innerHeight - 50 : window.innerHeight - 70}
              >
                <BackgroundImage source={item.src} width={'100%'} />
                <Flex className={'legend'} justify={'center'}>
                  <ArrowDown />
                </Flex>
              </Flex>
            ))}
          </Carousel>
        </Flex>
        <Flex
          spaces={['mt-6']}
          align={'center'}
          justify={'center'}
          xs={12}
          row
          wrap
        >
          {categories?.categoriesList?.map((category, index) => {
              console.log(breakpoint);
              return <Flex
                xs={12}
                md={6}
                lg={3}
                key={index}
                onClick={() => pushRoute(category.categoryPath)}
              >
                <Card
                  cardWidth={'100%'}
                  header={
                    <Flex column justify={'center'} align={'center'}>
                      <Text ellipsis>{category.categoryName}</Text>
                    </Flex>
                  }
                >
                  <CardBackgroundImageComponent imageSrc={category.imageSrc} />
                </Card>
              </Flex>;

            }
          )}
        </Flex>
      </Flex>
    </Fragment>;
  }
}


export default withResizeObserverHOC(HomeContainer);
