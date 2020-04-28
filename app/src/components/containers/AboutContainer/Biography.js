import React, {Fragment} from 'react';

import Flex      from 'components/common/Flex/Flex';
import Text      from 'components/common/Text/Text';
import Translate from 'components/common/Translate/Translate';


const Biography = () => <Fragment>
  <Flex spaces={['mt-4']}>
    <Text
      size={'scale-5'
      } weight={'semibold'}
    >
      <Translate>ABOUT.FULL_NAME</Translate>
    </Text>
  </Flex>
  <Flex>
    <Text>
      <Translate>ABOUT.PROFESSION</Translate>
    </Text>
  </Flex>
  <Flex>
    <Text weight={'semibold'}>
      <Translate>BORN</Translate>:&nbsp;
    </Text>
    <Text>
      <Translate>ABOUT.BORN</Translate>
    </Text>
  </Flex>
  <Flex>
    <Text weight={'semibold'}>
      <Translate>EDUCATION</Translate>:&nbsp;
    </Text>
    <Text>
      <Translate>ABOUT.EDUCATION</Translate>
    </Text>
  </Flex>
  <Flex>
    <Text>
      <Translate>ABOUT.SPECIALIZATION</Translate>
    </Text>
  </Flex>
</Fragment>;

export default Biography;
