import React from 'react';

import Flex      from 'components/common/Flex/Flex';
import Text      from 'components/common/Text/Text';
import Translate from 'components/common/Translate/Translate';

import './SearchNoResult.scss';

const SearchNoResult = () => {
  return <Flex
    className={'SearchNoResult empty-state'}
    column
    width={'100%'}
    flex={'1 1 auto'}
    align={'center'}
    spaces={['pt-13']}
  >
    <Text>
      <Translate>NO_SEARCH_RESULT_FOUND</Translate>
    </Text>
  </Flex>;
};

export default SearchNoResult;
