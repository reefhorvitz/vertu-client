import React, {useState} from 'react';
import Logo from "../Logo";
import {Link, useHistory, useLocation} from "react-router-dom";
import FacebookLogin from "../Auth/FacebookLogin";
import AppointmentSchedule from "../AppointmentSchedule";

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
    if(reducerEmail && token){
        onLoginSuccess(reducerEmail, token)
    }
    return (
        <div className="login-sec">
            <div className="login-lft-sec">
                <Logo/>
                <div className="login-txt">
                    <h2>Go places you've <br/> dreamed of.</h2>
                    <h5>Wafer dessert danish. Powder toffee cookie jelly beans bear claw jelly-o gingerbread halvah.
                        and</h5>
                </div>
            </div>
            <div className="login-rgt-sec">
                <div className="social-media-login social-login">
                    <h3>Login in with</h3>
                    <div className="social-login">
                        <span className="facebook-login">
                            <FacebookLogin onLoginSuccess={onLoginSuccess}/>
                        </span>
                        <span className="google-login">
                            <a href="#">
                                <i className="fa fa-google" aria-hidden="true"/>
                                Log in with Google
                            </a>
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
                            <input type="submit" value="Sign in"/>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;