import { useState } from "react"
import {createUserAuthWithEmailAndPassword} from '../../utils/firebase/firebase';

const SignUp = ()=>{
    // this an object that allows us to keep track of multiple fields in our form/
    const defaultForm = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formFields, setFormFields] = useState(defaultForm);
    const {displayName, email, password, confirmPassword}= formFields

const handleChange = (event)=>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
    console.log(formFields)
}
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password != confirmPassword){
            alert("password do not match");
            return;
        }
    }
    return(
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={()=>{}}>
                <label>displayName</label>
                <input required type="text" onChange={handleChange} name="displayName" value={displayName} ></input>
                <label>email</label>
                <input required type="email" onChange={handleChange} name="email" value={email} ></input>
                <label>password</label>
                <input required type="password" onChange={handleChange} name="password" value={password} ></input>
                <label>confirm password</label>
                <input required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} ></input>
            </form>
        </div>
    )
}

export default SignUp