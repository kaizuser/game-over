import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usersActions from '../../redux/actions/usersActions';

import {LoginSocialGoogle} from 'reactjs-social-login'

function GoogleLogIn(props) {

  const responseGoogle = async (res) => {
     const logedUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google"
    }
    await props.signInUser(logedUser)
  }

  return (
        <LoginSocialGoogle
          client_id={'710252764146-ak1dqlo7bsbbpkviok5c312f299cmbec.apps.googleusercontent.com'}
          onLoginStart={responseGoogle}
        >
	<button>GOOGLE</button>
        </LoginSocialGoogle>

  );
}

const mapDispatchToProps = {
    signInUser: usersActions.signInUser,

}

export default connect(null, mapDispatchToProps)(GoogleLogIn);
