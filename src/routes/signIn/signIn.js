import {signInWithgooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase';
import SignUp from '../../components/signUp-form/signUp';
const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithgooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUp/>
        </div>
    )
}
export default SignIn