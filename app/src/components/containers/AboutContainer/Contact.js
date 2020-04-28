import React from 'react';

import translate from 'helpers/translate';

import Flex      from 'components/common/Flex/Flex';
import Text      from 'components/common/Text/Text';
import Translate from 'components/common/Translate/Translate';


const Contact = () => <Flex spaces={['mt-4, mb-4']} column>
  <Flex justify={'center'} spaces={['mb-2']}>
    <Text weight={'semibold'} size={'scale-5'}><Translate>CONTACT</Translate></Text>
  </Flex>
  <Flex justify={'space-between'}>
    <Text weight={'semibold'}><Translate>PHONE</Translate>:&nbsp;</Text>
    <Text><Translate>ABOUT.PHONE_1</Translate></Text>
  </Flex>
  <Flex justify={'end'}>
    <Text><Translate>ABOUT.PHONE_2</Translate></Text>
  </Flex>
  <Flex justify={'space-between'}>
    <Text weight={'semibold'}><Translate>EMAIL</Translate>:&nbsp;</Text>
    <a
      href={`mailto:${translate('ABOUT.EMAIL')}`} type={'email'}
    ><Text><Translate>ABOUT.EMAIL</Translate></Text></a>
  </Flex>
</Flex>;

export default Contact;
