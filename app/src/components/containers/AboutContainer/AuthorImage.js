import React, {Fragment} from 'react';

import {asset} from 'helpers/apiEndpoint';

import Flex  from 'components/common/Flex/Flex';
import Image from 'components/common/Image/Image';


const AuthorImage = () => <Fragment>
  <Flex
    spaces={['mt-9']}
  >
    <Image source={asset('images/armen_gevorgiants.png')} imgStyles={{maxHeight: 600, maxWidth: 300}} />
  </Flex>
</Fragment>;

export default AuthorImage;
