import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    console.log('Token:', token);
    const decodedToken = decode(token);
    const userId = decodedToken.data._id;
    console.log('User ID:', userId); // Check if the user ID is correctly extracted
    return userId;
   
  }

  // getProfile() {
  //   const token = this.getToken();
  //   console.log('Token:', token); 
  //   return decode(this.getToken());
  // }

  loggedIN() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
