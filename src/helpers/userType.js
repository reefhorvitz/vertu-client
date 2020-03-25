import store from '../Redux/store';
import {getIsAgent} from "../Containers/AuthContainer/selectors";

export function handleByUserType(userResponse, agentResponse){
    return getIsAgent(store.getState()) ?
        agentResponse :
        userResponse;
}