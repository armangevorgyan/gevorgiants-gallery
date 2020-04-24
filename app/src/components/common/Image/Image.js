import React     from 'react';
import PropTypes from 'prop-types';

import './Image.scss';


class Image extends React.Component {
  state = {
    withError: false,
  };

  onError = (event) => {
    event.preventDefault();
    this.setState({
      withError: true,
    });
  };

  render() {
    const {
      source,
      filter,
      aspectRatio,
      imgStyles
    } = this.props;

    const {
      withError,
    } = this.state;

    let classNames = ['Image'];

    let styles = {};
    let imageStyles = {
      ...imgStyles
    };

    if (filter) {
      imageStyles.filter = filter;
    }

    if (aspectRatio && aspectRatio.length === 2) {
      classNames.push('aspectRatio');

      styles.paddingTop = ((aspectRatio[1] / aspectRatio[0]) * 100) + '%';
    }

    if (withError) {
      classNames.push('withError');
    }

    return (
      <div className={classNames.join(' ')} style={styles}>
        {!withError && <img style={imageStyles} src={source} onError={this.onError} />}
      </div>
    );
  }
}


Image.propTypes = {
  source: PropTypes.string,
  filter: PropTypes.string,
  imgStyles: PropTypes.object,
  aspectRatio: PropTypes.arrayOf(PropTypes.number), // aspectRatio={[9, 16]}
};

export default Image;
