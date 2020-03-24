export default function getAllAppointments(userId) {
    return  `{
  allAppointments {
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