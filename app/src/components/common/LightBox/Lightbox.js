/*Author https://github.com/jfcaiceo, Thanks :) */
import React     from 'react';
import PropTypes from 'prop-types';

import Container  from './Container';
import BodyPortal from './BodyPortal';

import 'components/common/LightBox/Lightbox.scss';


class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLightbox = this.toggleLightbox.bind(this);
    this.state = {
      showLightbox: false,
      selectedImage: 0
    };
  }

  toggleLightbox(idx) {
    this.setState({
      showLightbox: !this.state.showLightbox,
      selectedImage: idx
    });
  }

  render() {
    let props = this.props;
    let images = props.images.map((image, idx) => {
      return props.renderImageFunc.call(
        this,
        idx,
        image,
        this.toggleLightbox,
        props.thumbnailWidth,
        props.thumbnailHeight,
        props.showTitle
      );
    });
    let container;
    if (this.state.showLightbox)
      container = (
        <BodyPortal>
          <Container
            {...this.props}
            toggleLightbox={this.toggleLightbox}
            selectedImage={this.state.selectedImage}
          />
        </BodyPortal>
      );

    return (
      <div className='lightbox-container'>
        {images}
        {container}
      </div>
    );
  }
}


Lightbox.defaultProps = {
  showImageModifiers: true,
  thumbnailWidth: '250px',
  thumbnailHeight: '250px',
  showTitle: true,
  renderImageFunc: (idx, image, toggleLightbox, width, height, showTitle) => {
    return (
      <div className={'lightbox-image-wrapper'} key={idx}>
        <div
          // src={!!image.thumbnailSrc ? image.thumbnailSrc : image.src}
          className='lightbox-img-thumbnail'
          style={{
            width: width,
            height: height,
            backgroundImage: !!image.thumbnailSrc ? `url(${image.thumbnailSrc})` : `url(${image.src})`,
          }}
          onClick={toggleLightbox.bind(null, idx)}
        />
        {showTitle ? <p
          className={'lightbox-thumbnail-title'}
        >{image.title}</p> : null}
      </div>
    );
  }
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    thumbnailSrc: PropTypes.string
  })).isRequired,
  showImageModifiers: PropTypes.bool,
  thumbnailWidth: PropTypes.string,
  thumbnailHeight: PropTypes.string,
  showTitle: PropTypes.bool,
  renderImageFunc: PropTypes.func,
  renderDescriptionFunc: PropTypes.func,
  pageUrl: PropTypes.string
};
export default Lightbox;
