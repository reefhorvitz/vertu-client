export default `
{
  allProperties {
    edges {
      node {
        id
        size
        description
        price
         location {
          addressOne
          city {
            name
          }
          city {
            country {
              name
            }
          }
        }
         seller {
          email
          firstName
          lastName
          phone
          image{url}
        }
        yearBuilt
        bedroomNumber
        bathroomNumber
        heating {
          name
        }
        cooling {
          name
        }
        parking {
          name
        }
        type {
          name
        }
        tags {
          edges {
            node {
              name
            }
          }
        }
        otherData {
          edges {
            node {
              name
            }
          }
        }
        facilities {
          edges {
            node {
              name
            }
          }
        }
        amenities {
          edges {
            node {
              name
            }
          }
        }
        images {
          url
        }
      }
    }
  }
}
`