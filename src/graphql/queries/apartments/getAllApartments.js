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
          
          name
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

export function filtersToAprtmentFilterQuery({sellerId, city, bedroomNum, bathroomNum, price}) {
    let filtersQuery = '';
    if(sellerId){
        filtersQuery += `sellerId: ${sellerId}, `;
    }
    if(city){
        filtersQuery += `cityId: ${city}, `;
    }
    if(bedroomNum !== null){
        if(bedroomNum === 4){
            filtersQuery += `bedroomNumberGte: 4, `;
        }
        else {
            filtersQuery += `bedroomNumber: ${bedroomNum}, `;
        }
    }
    if(bathroomNum){
        filtersQuery += `bathroomNumber: ${bathroomNum}, `;
    }
    if(price){
        filtersQuery += `maxPrice: ${price.max}, `;
        filtersQuery += `minPrice: ${price.min}, `;
    }
    if(filtersQuery){
        return `(${filtersQuery})`;
    }
    else {
        return '';
    }
}