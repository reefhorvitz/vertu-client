import {graphqlRequest} from "./index";
import getAllApartmentsQuery from '../../graphql/queries/apartments/getAllApartments';
import getApartmentsByIdQuery from '../../graphql/queries/apartments/getApartmentsByIds';
import {PROPERTY_METADATA_TYPES} from "../../Containers/PropertyMetadata/consts";

export function getAllApartments() {
    const query = getAllApartmentsQuery;
    return handleGetApartments(query);
}

export async function getApartmentsByIds(apartmentsIds) {
    const query = getApartmentsByIdQuery(apartmentsIds);
    return handleGetApartments(query);
}


export async function handleGetApartments(query) {
    const {allProperties} = await graphqlRequest(query);
    allProperties.forEach(property => migratePropertyMetadata(property));
    return allProperties;
}

function migratePropertyMetadata(obj) {
    for(let key in obj){
        if(PROPERTY_METADATA_TYPES.includes(key)){
            if(obj[key] == null){
                continue;
            }
            if(obj[key].length){
                obj[key] = obj[key].map(val => val.name)
            }
            else {
                obj[key] = obj[key].name;
            }
        }
        else if(key == 'images'){
            obj[key] = obj[key].map(image => image.url);
        }
        else if(key == 'seller' && obj[key].image){
            obj[key].image = obj[key].image.url
        }
    }
}