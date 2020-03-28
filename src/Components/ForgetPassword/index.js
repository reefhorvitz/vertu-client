import React, {useState} from 'react';
import LoginIntroduction from "../Login/LoginIntroduction";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    return (
        <div className="login-sec">
            <LoginIntroduction>
                <h2>Live Video in Your <br/>Future Apartment</h2>
                <h5>Wafer dessert danish. Powder toffee cookie jelly beans bear claw jelly-o gingerbread halvah.
                    and</h5>
            </LoginIntroduction>
            <div className="login-rgt-sec forget-password">
                <div className="social-media-login">
                    <h3>Forget Password</h3>
                    <p>Please Enter your email address and we will send your password by email immadiatly.</p>
                    <form>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <input type="submit" value="Send"/>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default ForgotPassword;