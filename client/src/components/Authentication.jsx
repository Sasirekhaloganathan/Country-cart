import React , {Fragment} from "react";
import '../Style/Auth.css';
import { FaUser,FaLock } from "react-icons/fa";
function Authentication(){
    return(
        <>
           <div class="wrapper">
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon' />
                </div>
                <div class="input-box" for="password">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon' />
                </div>
                <div class="remember-forgot" >
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forget password</a>
                </div>
                <button type="submit">Login</button>
                <div class="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
        </>
    )
}
export default Authentication;