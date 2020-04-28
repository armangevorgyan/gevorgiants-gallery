import React, {Fragment} from 'react';

import {ExhibitionYears} from 'configs/exhbitionYears';

import Flex      from 'components/common/Flex/Flex';
import Text      from 'components/common/Text/Text';
import Translate from 'components/common/Translate/Translate';


const Exhibitions = () => <Fragment>
  <Flex justify={'center'}>
    <Text
      weight={'semibold'}
      size={'scale-4'}
    >
      <Translate>EXHIBITIONS</Translate></Text>
  </Flex>
  {ExhibitionYears?.map((year, index) =>
    <Flex key={index} spaces={['ml-5', /*'mt-1'*/]} className={'exhibition'}>
      <Text weight={'semibold'}>
        <Translate>{`YEARS.${year}`}</Translate> &nbsp;-&nbsp;&nbsp;
      </Text>
      <Text><Translate
        data={{name: <span style={{fontWeight: 700}}><Translate>{`NAMES.${year}`}</Translate></span>}}
      >
        {`ABOUT.${year}`}</Translate>
      </Text>
    </Flex>
  )}
  <Flex spaces={['mt-2']}>
    <Text size={'scale-5'}><Translate>ABOUT.INFO</Translate></Text>
  </Flex>
</Fragment>;

export default Exhibitions;
