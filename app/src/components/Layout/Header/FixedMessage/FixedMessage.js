import React     from 'react';
import {connect} from 'react-redux';

import authActions from 'store/auth/authActions';

import Text      from 'components/common/Text/Text';
import Flex      from 'components/common/Flex/Flex';
import Translate from 'components/common/Translate/Translate';
import Link      from 'components/common/Link/Link';

import './FixedMessage.scss';


@connect(
  state => ({
    isEmailVerified: state.auth.account.isEmailVerified,
  }),
  dispatch => ({
    resendVerificationEmail: () => dispatch(authActions.resendVerificationEmail())
  }),
)
class FixedMessage extends React.Component {

  renderEmailIsNotVerifiedMessage = () => {
    const {resendVerificationEmail} = this.props;

    return <Flex
      className={'FixedMessageItem'}
      columnc
    >
      <Text color={'neutral-800'}>
        <Translate
          data={{
            emailVerificationLink: <Link
              className={'underlined-link'}
              color={'neutral-800'}
              to={''}
              onClick={(e) => {
                e.preventDefault();
                resendVerificationEmail();
              }}
            >
              <Translate>RESEND_VERIFICATION_EMAIL</Translate>
            </Link>
          }}
        >
          YOUR_EMAIL_NOT_VERIFIED
        </Translate>
      </Text>
    </Flex>;
  };

  render() {
    const {isEmailVerified} = this.props;

    return (
      <div className={'FixedMessage'}>
        {!isEmailVerified && this.renderEmailIsNotVerifiedMessage()}
      </div>
    );
  }
}

export default FixedMessage;
