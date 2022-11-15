import React, { useState } from 'react';
import "./index.css"
import { useForm } from "react-hook-form";
import Spinner from './Spinner';
const Login = () => {
    const [loading,setLoading] = useState(false);
    const [user, setUser] = useState({
        mail: "",
        password: "",
    });
    const { register,onChange , formState: { errors }, handleSubmit } = useForm();

    const HandleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
      };
    
    const SubmitForm = async () => {
        setLoading(true);
        const added_user = {...user,isAuth:true}
        setTimeout(function(){
            localStorage.setItem('user', JSON.stringify(added_user));
            setLoading(false);
            window.location.href = "/"
        }, 2000);  
    };


    return (
        <div className="login--container container">
           
           <div className="login_form--container">
                <h2 className="title">Login</h2>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <div className="input_container">
                        <label>email</label>
                        <input
                            {...register("mail",
                             {
                                onChange:(e) => HandleInputChange(e),
                                required: "Email Address is required",pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message: "invalid email address" }
                             })} 
                            aria-invalid={errors.mail ? "true" : "false"} 
                        />
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                    </div>

                    <div className="input_container">
                        <label>password</label>
                        <input type="password"
                            onChange={(value) => HandleInputChange(value)}
                            aria-invalid={errors.password ? "true" : "false"} 
                        {...register("password",{
                           onChange:(e) => HandleInputChange(e),
                           required: "Password must contain at least 8 characters with at least 2 numericals",
                           pattern: {value: /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/i , message:"Password must contain at least 8 characters with at least 2 numericals" }
                         }) 
                       }
                       />
                        {errors.password  && <p role="alert">{errors.password?.message}</p>}

                    </div>
                    <button className="submit_button" type="submit">
                        { loading ? <Spinner /> : <span>Login</span>}
                    </button>
                </form>
                
            </div> 
        </div>
    );
};

export default Login;
