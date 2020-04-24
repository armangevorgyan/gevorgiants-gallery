import React from 'react';

import {asset} from 'helpers/apiEndpoint';

import Flex               from 'components/common/Flex/Flex';
import Translate          from 'components/common/Translate/Translate';
import Text               from 'components/common/Text/Text';
import Image              from 'components/common/Image/Image';
import availableLanguages from 'configs/language';


const languages = availableLanguages.map(l => ({
  label: <Flex
    align={'center'}
    spaces={['p-2']}
  >
    <Flex width={22} height={22}>
      <Image source={asset('images/' + l.icon)} />
    </Flex>
    <Flex spaces={['ml-3']}>
      <Text size={'scale-6'}>
        <Translate>{l.label}</Translate>
      </Text>
    </Flex>
  </Flex>,
  value: l.value
}));

export default languages;
