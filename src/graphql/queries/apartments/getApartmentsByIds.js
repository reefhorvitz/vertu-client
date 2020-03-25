export default function getApartmentsByIds(apartmentsIds) {
    return `
    {
  allProperties(id:"${apartmentsIds.join(',')}") {
    edges {
      node {
        id
        size
        description
        price
        yearBuilt
         seller {
          email
          name
          phone
          image{url}
        }
        bedroomNumber
        bathroomNumber
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
    `;
}