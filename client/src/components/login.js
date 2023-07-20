import React from 'react';
import GoogleLogin from 'react-google-login';

const Login = ({ onSuccess }) => {
  const responseGoogle = (response) => {
    // The response object contains user information after successful login
    onSuccess(response);
  };

  const onFailure = (error) => {
    console.log('Login failed:', error);
  };

  return (
    <div>
      <h2>Login</h2>
      <GoogleLogin
        clientId="827047395315-b24272pi6ufge1n1u4uh9bjbd4kmrqr0.apps.googleusercontent.com" // Replace with your actual Google Client ID
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
