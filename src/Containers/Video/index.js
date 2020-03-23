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
    const {propertyId} = ownProps;
    return {
        onLoad: () => dispatch(fetchVideoTokens(propertyId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);