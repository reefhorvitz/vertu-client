import {connect} from 'react-redux';
import Login from "../../Components/Login";
import {onLoginSuccess} from "../AuthContainer/actions";
import {getIsConnected, getUsersEmail, getUsersToken} from "../AuthContainer/selectors";
import {createStructuredSelector} from "reselect";

const mapStateToProps = createStructuredSelector({
    isConnected: getIsConnected,
    email: getUsersEmail,
    token: getUsersToken
});

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginSuccess: (email, token) => dispatch(onLoginSuccess(email, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);