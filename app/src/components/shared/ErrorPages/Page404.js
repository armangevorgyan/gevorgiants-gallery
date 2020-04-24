import React     from 'react';

import {asset}   from 'helpers/apiEndpoint';

import Flex      from 'components/common/Flex/Flex';
import Text      from 'components/common/Text/Text';
import Translate from 'components/common/Translate/Translate';
import Image     from 'components/common/Image/Image';


const Page404 = () => {
  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      align={'center'}
      justify={'center'}
    >
      asfdsfds
      <Flex
        column
        spaces={['pb-11']}
        align={'center'}
      >
        <Flex width={280}>
          <Image source={asset('images/aniv.png')}/>
        </Flex>
        <Flex spaces={['mt-6']}>
          <Text color={'primary'} size={'scale-4'} weight={'semibold'}>
            <Translate>ERRORS.SOMETHING_WENT_WRONG</Translate>
          </Text>
        </Flex>
        <Flex spaces={['mt-4']}>
          <Text color={'gallery-black'} size={'scale-6'}>
            <Translate>ERRORS.CANT_FIND_PAGE</Translate>
          </Text>
        </Flex>
        <Flex spaces={['mt-9']} width={250}>
          <button
            className={'fluid'}
            onClick={() => location.href = '/'}
          >
            <Text>
              <Translate>BUTTON_LABELS.HOME</Translate>
            </Text>
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page404;
