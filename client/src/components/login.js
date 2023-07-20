import GoogleLogin from 'react-google-login';

const clientId = '827047395315-f3mgmjgdcesmj1eiifpj96aps8lecfdb.apps.googleusercontent.com';

function Login() {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div id = "signInButton">
      <GoogleLogin
        clientId={clientId} // Replace with your actual Google Client ID
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
