import React, {useState} from "react";

export function UserForm (){
    const[userForm, setUserForm] = useState({
        mailId : "",
        name : "",
        password : "",
        confirmPassword : "",
    });

    const[errors, setErrors]  = useState({
        mailId : "",
        name : "",
        password : "",
        confirmPassword : "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserForm({...userForm, [name] : value});
    }

    const validateEmail = (e) => {
            if(!userForm.mailId.includes("@gmail.com")){
                return "Enter valid email Id";
            }
            else{
                return "";
            }
        }

    const validateName = (e) => {
        if(userForm.name.length < 3){
            return "Enter valid name with character length more than 3";
        }
        else{
            return "";
        }
    }

    const validatePassword = (e) => {
            if(userForm.password.length < 6){
                return "Enter valid password";
            }
            else{
                return "";
            }
        }

    const validateConfirmPassword = (e) => {
            if(userForm.confirmPassword !== userForm.password){
                return "Password should match";
            }
            else{
                return "";
            }
        }

    const submitForm = (e) => {
        e.preventDefault();
        const errorInMail = validateEmail();
        const errorInName = validateName();
        const errorInPassword = validatePassword();
        const errorInConfirmPassword = validateConfirmPassword();

        setErrors({
            mailId : errorInMail,
            name : errorInName,
            password : errorInPassword,
            confirmPassword : errorInConfirmPassword,
        });

        if(errorInMail || errorInName || errorInPassword || errorInConfirmPassword){
            return;
        }
        alert(`The Email Id is : ${userForm.mailId} + The name is : ${userForm.name} + The password is : ${userForm.password}`);

        setUserForm({
            mailId : "",
            name : "",
            password : "",
            confirmPassword : "",
        });

        setErrors({
            mailId : "",
            name : "",
            password : "",
            confirmPassword : "",
        });
    }
    return(
        <div>
            <h1>User Registration Form</h1>
            <form onSubmit={submitForm}>
                <label>Email Id:
                    <input type="text"
                           name="mailId"
                           value={userForm.mailId}
                           onChange={handleChange}/>
                </label>
                {errors.mailId && <p>{errors.mailId}</p>}<br/>
                <label>Name:
                    <input type="text"
                           name="name"
                           value={userForm.name}
                           onChange={handleChange}/>
                </label>
                {errors.name && <p>{errors.name}</p>}<br/>
                <label>Password:
                    <input type="password"
                           name="password"
                           value={userForm.password}
                           onChange={handleChange}/>
                </label>
                {errors.password && <p>{errors.password}</p>}<br/>
                <label>Confirm Password:
                    <input type="password"
                           name="confirmPassword"
                           value={userForm.confirmPassword}
                           onChange={handleChange}/>
                </label>
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}<br/>
                <input type="submit"/>
            </form>
        </div>
    );
}