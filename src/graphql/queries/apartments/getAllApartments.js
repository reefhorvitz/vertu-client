export default (filters) =>  `
{
  allProperties ${filtersToAprtmentFilterQuery(filters)}{
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

function filtersToAprtmentFilterQuery({city, bedroomNum, bathroomNum, price}) {
    let filtersQuery = '';
    if(city){
        filtersQuery += `cityId: ${city}, `;
    }
    if(bedroomNum){
        filtersQuery += `bedroomNumber: ${bedroomNum}, `;
    }
    if(bathroomNum){
        filtersQuery += `bathroomNumber: ${bathroomNum}, `;
    }
    if(price){
        filtersQuery += `maxPrice: ${price.max}, `;
    }
    if(filtersQuery){
        return `(${filtersQuery})`;
    }
    else {
        return '';
    }
}