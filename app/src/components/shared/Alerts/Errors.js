import React     from 'react';
import PropTypes from 'prop-types';

import Alert     from 'components/common/Alert/Alert';
import Flex      from 'components/common/Flex/Flex';
import Translate from 'components/common/Translate/Translate';




const Errors = ({errors, testId}) => errors.length > 0 && <Flex
    xs={12}
    column
    spaces={['mb-2']}
    testId={testId}
  >
    {errors.map(error => <Flex key={error} spaces={['mt-2']} xs={12}>
      <Alert iconName={'warning'} alertType={'error'}>
        <Translate>{'ERRORS.' + error}</Translate>
      </Alert>
    </Flex>)}
  </Flex> || null;

Errors.propTypes = {
  errors: PropTypes.array
};

export default Errors;
