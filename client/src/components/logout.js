import { GoogleLogOut } from "react-google-login";

const clientId = "827047395315-f3mgmjgdcesmj1eiifpj96aps8lecfdb.apps.googleusercontent.com";

function Logout() {

  const onSuccess = () => {
    console.log('Logout made successfully');
  }

  return (
    <div id = "signOutButton">
      <GoogleLogOut
        clientId={clientId} // Replace with your actual Google Client ID
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        />
    </div>
  );
};

export default Logout;
