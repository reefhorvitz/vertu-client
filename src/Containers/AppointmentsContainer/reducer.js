import {fromJS} from "immutable";

const initialState = fromJS({
  // appointments: [
  //     {
  //         apartmentId: 1,
  //         time: new Date(),
  //     }
  // ]
});

export default function AppointmentsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}