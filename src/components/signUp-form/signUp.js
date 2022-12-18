import { useState } from "react";

const defaultForm = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = ()=>{
    const [formField, setFormField] = useState(defaultForm);
    const {displayName, email, password, confirmPassword} = formField;

    const handleChange = (event)=>{
      const {name} = event
    }
    return(
        <div>
            <h1>Sign up with your email and password </h1>
            <form onSubmit={()=>{}}>
                <label>display Name</label>
                <input type="text" required onChange={handleChange} name='displayname' value={displayName}/>

                <label>Email Address</label>
                <input type="email" required onChange={handleChange}/>

                <label>Password</label>
                <input type="password" required/>

                <label>Confirm Password</label>
                <input type="password" required/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;