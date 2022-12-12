import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaHf0NJumGgsA5NzyGAF6eJnITznVYfUM",
    authDomain: "clothing-store-8f6ce.firebaseapp.com",
    projectId: "clothing-store-8f6ce",
    storageBucket: "clothing-store-8f6ce.appspot.com",
    messagingSenderId: "818663758877",
    appId: "1:818663758877:web:526268ad54d16df449baf4"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select an account"
  });

  export const auth = getAuth();
  export const signInWithgoogle = ()=> signInWithPopup(auth, provider);
