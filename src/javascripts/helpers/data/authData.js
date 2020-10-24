import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import navbar from '../../components/navbar';
import auth from '../../components/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#app').html('');
      const currentUser = userData.setCurrentUser(user);
      navbar.navbar(currentUser);
    } else {
      auth.loginButton();
      $('#nav').html('');
    }
  });
};

export default { checkLoginStatus };
