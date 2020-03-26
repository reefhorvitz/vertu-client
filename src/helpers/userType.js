import store from '../Redux/store';
import {getIsAgent} from "../Containers/AuthContainer/selectors";

export function handleByUserType(userResponse, agentResponse){
    const isAgent = getIsAgent(store.getState());
    if(typeof userResponse === 'function'){
        return isAgent ? agentResponse() : userResponse()
    }
    return isAgent ? agentResponse : userResponse
}