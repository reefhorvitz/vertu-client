import {handleByUserType} from "../../../helpers/userType";

export default function getAllAppointments(userId) {
    return  `{
  allAppointments(${handleByUserType('customerId', 'sellerId')}:${userId}){
    edges {
      node {
        id
        time
        isCompleted
        property {
          id
        }
      }
    }
  }
}
`
}