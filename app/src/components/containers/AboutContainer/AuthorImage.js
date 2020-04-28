import React, {Fragment} from 'react';

import {asset} from 'helpers/apiEndpoint';

import Flex from 'components/common/Flex/Flex';


const styles = {
  backgroundImage: `url(${asset('images/armen_gevorgiants.jpg')})`,
  width: 300,
  height: 600,
  backgroundPosition: '-140px -70px',
  backgroundRepeat: 'no-repeat',
};
const AuthorImage = () => <Fragment>
  <Flex
    spaces={['mt-9']}
    style={styles}
  />
</Fragment>;

export default AuthorImage;
