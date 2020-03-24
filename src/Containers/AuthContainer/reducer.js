import {fromJS} from "immutable";

const initialState = fromJS({
  isConnected: false,
  id: null,
  name: null,
  phone: null,
  email: null,
  profile: null,
  type: null,
});

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}