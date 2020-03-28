import {getUsersId} from "../Containers/AuthContainer/selectors";

export const usernameMiddleware = store => next => action => {
  //TODO: Set up authentication and add selector to userId
  if(!action.userId){
    action.userId = getUsersId(store.getState());
  }
  next(action)
};