import React     from 'react';
import PropTypes from 'prop-types';

import Container  from './Container';
import BodyPortal from './BodyPortal';

import './Lightbox.css';


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
        props.thumbnailHeight
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
  thumbnailWidth: '80px',
  thumbnailHeight: '80px',
  renderImageFunc: (idx, image, toggleLightbox, width, height) => {
    return (
      <div className={'lightbox-image-wrapper'} key={idx}>
        <img
          src={!!image.thumbnail ? image.thumbnail : image.src}
          className='lightbox-img-thumbnail'
          style={{width: width, height: height}}
          alt={image.title}
          onClick={toggleLightbox.bind(null, idx)}
        />
        <p
          style={{
            fontSize: 16,
            textAlign: 'left',
            margin: '0 10px'
          }}
        >{image.title}</p>
      </div>
    );
  }
};

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    thumbnail: PropTypes.string
  })).isRequired,
  showImageModifiers: PropTypes.bool,
  thumbnailWidth: PropTypes.string,
  thumbnailHeight: PropTypes.string,
  renderImageFunc: PropTypes.func,
  renderDescriptionFunc: PropTypes.func
};
export default Lightbox;
