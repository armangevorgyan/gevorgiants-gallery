import React     from 'react';

import {asset}   from 'helpers/apiEndpoint';

import Flex      from 'components/common/Flex/Flex';
import Text      from 'components/common/Text/Text';
import Translate from 'components/common/Translate/Translate';
import Image     from 'components/common/Image/Image';

import './Page404.scss';

const Page404 = () => {
  return (
    <Flex
      className={'Page404Container'}
      width={'100vw'}
      height={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Flex
        column
        spaces={['pb-11']}
        align={'center'}
      >
        <Flex width={280} height={220}>
          <Image source={asset('images/aniv.png')}/>
        </Flex>
        <Flex spaces={['mt-6']}>
          <Text color={'primary'} size={'scale-4'} weight={'semibold'}>
            <Translate>ERRORS.SOMETHING_WENT_WRONG</Translate>
          </Text>
        </Flex>
        <Flex spaces={['mt-2']} width={250}>
          <button
            className={'fluid home-button'}
            onClick={() => location.href = '/'}
          >
            <Text>
              <Translate>BUTTON_LABELS.BACK_TO_HOME</Translate>
            </Text>
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Page404;
