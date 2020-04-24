import React     from 'react';
import PropTypes from 'prop-types';

import Card, {CardImageComponent} from 'components/common/Card/Card';
import Flex                       from 'components/common/Flex/Flex';
import Text                       from 'components/common/Text/Text';


const ImagesGrid = ({imagesList}) => <Flex
  width={'75%'}
  spaces={['mt-4']}
  align={'center'}
  justify={'center'}
  wrap
>
  {imagesList?.map((image, index) =>
    <Card
      cardColumnCount={8}
      cardWidth={250}
      cardHeight={'auto'}
      key={index}
      footer={
        <Flex column>
          <Text ellipsis>{image.title}</Text>
        </Flex>
      }
    >
      <CardImageComponent imageSrc={image.thumbnailSrc} />
    </Card>)
  }
</Flex>;

ImagesGrid.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ImagesGrid;
