import {fromJS} from "immutable";
import Profile from "../../static/images/profile-img.png";

const initialState = fromJS({
  id: 1,
  name: "Shmulic Chic",
  phone: "+12345678",
  email: "shmul@gmail.com",
  profile: Profile,
  type: null
});

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}