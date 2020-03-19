import {connect} from 'react-redux';
import Profile from "../../Components/Profile";
import {createStructuredSelector} from "reselect";
import {getUsersEmail, getUsersName, getUsersPhone, getUsersProfile} from "../AuthContainer/selectors";

const mapStateToProps = createStructuredSelector({
    name: getUsersName,
    email: getUsersEmail,
    phone: getUsersPhone,
    img: getUsersProfile,
});

export default connect(mapStateToProps, null)(Profile);