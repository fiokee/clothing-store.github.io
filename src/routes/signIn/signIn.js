import {signInWithgooglePopup} from '../../utils/firebase/firebase';

const SignIn = ()=>{
    const logGoogleUser = async () =>{
        const response = await signInWithgooglePopup();
        console.log(response)
    }
    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}
export default SignIn