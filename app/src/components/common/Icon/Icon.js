import React, { Component } from 'react';
import PropTypes from 'prop-types';
import iconPaths from 'assets/icons.json';

import './Icon.scss';

class Icon extends Component {

  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    className: PropTypes.string,
  };

  constructor(props){
    super(props);
    this.state = {
      color: this.props.color ? this.props.color : null
    };
  }

  getCurrentColor() {
    if (this.svgElem) {
      this.setState({
        color:  this.state.color ? this.state.color : window.getComputedStyle(this.svgElem).getPropertyValue('color')
      });
    }
  }

  componentDidMount() {
    this.getCurrentColor();
    const that = this;
    setInterval(function(){ that.getCurrentColor(); }, 100);
  }

  render() {
    this.icon = iconPaths.icons.find(icon => icon.tags[0] === this.props.icon);
    const icon = this.icon || iconPaths.icons.find(icon => icon.tags[0] === 'success');

    const {
      color,
      size,
    } = this.props;

    const classNames = ['Icon', this.props.className];

    if (color) {
      if (color === 'currentColor') {
        classNames.push('color-currentColor');
      }
      else if (!color.startsWith('#')) {
        classNames.push('color-' + color);
      }
    }

    return (
      <svg
        ref={(elem) => {
          this.svgElem = elem;
        }}
        style={{display: 'inline-block', verticalAlign: 'sub',}}
        width={size ? size : '24'}
        height={size ? size : '24'}
        viewBox={`0 0 ${icon.width || '1024'} ${icon.height || '1024'}`}
        className={classNames.join(' ')}
      >
        {icon.paths.map((path, index) => {
          let fill;
          let stroke;
          if(icon.attrs){
            fill = icon.attrs[index].fill !== 'none' ? this.state.color : 'none';
            stroke = icon.attrs[index].stroke !== 'none' ? this.state.color : 'none';
          } else {
            fill = this.state.color;
            stroke = 'none';
          }
          return (
            <path
              d={path}
              key={`path${index}`}
              fill={fill}
              stroke={stroke}
              strokeLinejoin={icon.attrs && icon.attrs[index].strokeLinejoin}
              strokeLinecap={icon.attrs && icon.attrs[index].strokeLinecap}
              strokeMiterlimit={icon.attrs && icon.attrs[index].strokeMiterlimit}
              strokeWidth={icon.attrs && icon.attrs[index].strokeWidth}
            />
          );
          }
        )}
      </svg>
    );
  }
}

export default Icon;
