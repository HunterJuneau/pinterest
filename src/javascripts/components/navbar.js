import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();

    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const navbar = () => {
  $('#nav').html(`
    <nav class="navbar sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="./documentation/pinterest-logo.png" height="24px" class="d-inline-block align-top" alt="Pinterest Logo">
        Home
      </a>
      <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
    </nav>`);

  logoutEvent();
};

export default { navbar };
