import {connect} from 'react-redux';
import Video from "../../Components/Video";
import {getVideoTokens} from "./selectors";
import {fetchVideoTokens} from "./actions";
import {getIsAgent} from "../AuthContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    return {
        isAgent: getIsAgent(state),
        ...getVideoTokens(state)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {appointmentId} = ownProps;
    return {
        onLoad: () => dispatch(fetchVideoTokens(appointmentId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);