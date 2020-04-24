import React, {useEffect, useState} from 'react';
import PropTypes                    from 'prop-types';
import './Card.scss';
import Flex                         from 'components/common/Flex/Flex';
import BackgroundImage              from 'components/common/Image/BackgroundImage';
import Image                        from 'components/common/Image/Image';


const imageWidth = (dimensions, cardColumnCount) => {

  let width;
  let cardWidth;
  if (dimensions.width <= 414) {
    width = 296;
    cardWidth = '100%';
  }
  if (dimensions.width < 768) {
    width = 296;
  } else if (dimensions.width > 1366) {
    width = 400;
  } else width = dimensions.cardDefaultWidth;
  return {
    imageWidth: width,
    cardWidth: cardWidth || cardColumnCount !== 4 ? dimensions.cardDefaultWidth : width + 24
  };
};
const Card = ({
                header,
                children,
                footer,
                contentPosition,
                selected,
                cardWidth,
                cardHeight,
                disabled,
                onClick,
                column,
                cardColumnCount
              }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    cardDefaultWidth: window.innerWidth < 768 ? '100%' : Math.floor((window.innerWidth - 100) / cardColumnCount)
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
        cardDefaultWidth: window.innerWidth < 768 ? '100%' : Math.floor((window.innerWidth - 100) / cardColumnCount)
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const classNames = ['Card'];
  if (selected) {
    classNames.push('Card_selected');
  }
  if (disabled) {
    classNames.push('Card_disabled');
  }
  const childrenWithProps = React.cloneElement(children, {dimensions: dimensions, cardColumnCount});
  return <Flex
    className={classNames.join(' ')}
    column={column}
    style={{
      textAlign: contentPosition,
      width: cardWidth || imageWidth(dimensions, cardColumnCount).cardWidth,
      height: cardHeight
    }}
    onClick={onClick}
  >
    {header ? <div className={'Card-header'}>
      {header}
    </div> : null}
    <div className={'Card-content'}>
      {childrenWithProps}
    </div>
    {footer ?<div className={'Card-footer'}>
      {footer}
    </div> : null}
  </Flex>;

};

Card.propTypes = {
  children: PropTypes.any,
  contentPosition: PropTypes.oneOf(['center', 'left', 'right']),
  footer: PropTypes.any,
  header: PropTypes.any
};

Card.defaultProps = {
  contentPosition: 'center',
  selected: false,
  cardColumnCount: 4,
  cardHeight: 'auto',
  // cardWidth: '100%',
  onClick: () => {
  },
  column: true
};


export const CardBackgroundImageComponent = ({imageSrc, dimensions, cardColumnCount}) => {

  return <Flex justify={'center'}>
    <BackgroundImage
      source={imageSrc}
      height={imageWidth(dimensions, cardColumnCount).imageWidth}
      width={imageWidth(dimensions, cardColumnCount).imageWidth}
    />
  </Flex>;
};
export const CardImageComponent = ({imageSrc, imgStyles, dimensions}) => {

  return <Flex justify={'center'}>
    <Image
      source={imageSrc}
      imgStyles={imgStyles}
      // height={imageWidth(dimensions).imageWidth}
      // width={imageWidth(dimensions).imageWidth}
    />
  </Flex>;
};

export default Card;
