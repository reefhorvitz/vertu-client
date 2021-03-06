import React, {useState} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import FacebookLogin from "../Auth/FacebookLogin";
import LoginIntroduction from "./LoginIntroduction";

const Login = ({isConnected, onLoginSuccess, email: reducerEmail, token}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || {from: { pathname: "/discover" }};
    if(isConnected){
        history.push(from.pathname);
        return null;
    }
    if(reducerEmail && token !== undefined){
        onLoginSuccess(reducerEmail, token)
    }
    return (
        <div className="login-sec">
            <LoginIntroduction>
                <h2>Go places you've <br/> dreamed of.</h2>
                <h5>Wafer dessert danish. Powder toffee cookie jelly beans bear claw jelly-o gingerbread halvah.
                    and</h5>
            </LoginIntroduction>
            <div className="login-rgt-sec">
                <div className="social-media-login social-login">
                    <h3>Login in with</h3>
                    <div className="social-login">
                        <span className="facebook-login">
                            <FacebookLogin onLoginSuccess={onLoginSuccess}/>
                        </span>
                        <span className="google-login">

                        </span>
                        <span className="or">OR</span>
                        <form>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <div className="sign-in-check">
                                <span className="label-box">
                                    <label className="check-label">
                                        <input type="checkbox" checked="checked"/>
                                        Stay Signed in
                                    </label>
                                </span>
                                <a href="#">Forget Password?</a>
                            </div>
                            <Link to={"/discover"}>
                            <input type="submit" value="Sign in" onClick={() => onLoginSuccess(email, password)}/>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;