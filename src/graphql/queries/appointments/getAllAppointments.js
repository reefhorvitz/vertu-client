export default function getAllAppointments(userId) {
    return  `{
  allAppointments(customer_Id: ${userId}) {
    edges {
      node {
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