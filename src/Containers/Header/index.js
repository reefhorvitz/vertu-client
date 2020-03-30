import {connect} from 'react-redux';
import Header from "../../Components/Header";
import {createStructuredSelector} from "reselect";
import {getIsConnected, getUsersName, getUsersProfile} from "../AuthContainer/selectors";
import {logout} from "../AuthContainer/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

const mapStateToProps = createStructuredSelector({
    isConnected: getIsConnected,
    name: getUsersName,
    profile: getUsersProfile
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);