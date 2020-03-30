import {connect} from 'react-redux';
import Profile from "../../Components/Profile";
import {createStructuredSelector} from "reselect";
import {getUsersEmail, getUsersName, getUsersPhone, getUsersProfile} from "../AuthContainer/selectors";
import {updateUserDetails} from "../AuthContainer/actions";

const mapStateToProps = createStructuredSelector({
    name: getUsersName,
    email: getUsersEmail,
    phone: getUsersPhone,
    img: getUsersProfile,
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateDetails: (name, phone, email) => dispatch(updateUserDetails(name, phone, email))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);