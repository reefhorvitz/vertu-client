export default function getAllAppointments(userId) {
    return  `{
  allAppointments {
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