import {signInWithgooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase';

const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const {user} = await signInWithgooglePopup();
        createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}
export default SignIn