import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import usersActions from '../../redux/actions/usersActions';

function GoogleLogUp(props) {

  const responseGoogle = async (res) => {
    const userData = {
      fullName: res.profileObj.givenName + " " + res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google",
      pais:props.pais
    }
    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
      className="googleSignUp group relative w-12 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black"
      clientId="710252764146-ak1dqlo7bsbbpkviok5c312f299cmbec.apps.googleusercontent.com"
      buttonText="SignUp with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
  signUpUser: usersActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleLogUp);
