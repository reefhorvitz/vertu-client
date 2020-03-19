import React, {useState} from 'react';
import Logo from "../Logo";
import {Link} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                            <a href="#">
                                <i className="fa fa-facebook-official" aria-hidden="true"/>
                                Login in with Facebook
                            </a>
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