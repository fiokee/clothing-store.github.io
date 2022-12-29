import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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
    prompt: ""
  });

//instantiating and auth provider
  export const auth = getAuth();
  export const signInWithgooglePopup = ()=> signInWithPopup(auth, provider);
  // export const signInWithgoogleRedirect = ()=> signInWithRedirect(auth, provider);

  // creating the database 
  export const db = getFirestore()
  export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid); 
    console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());

    // check if the user data exists
    if(!userSnapShot.exists()){
      const {displayName, email}= userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      }catch (error){
        console.log('there was an error creating user', error.message);
      }
    }
    return userDocRef;
  };