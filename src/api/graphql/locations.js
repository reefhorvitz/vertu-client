import getAllCitiesQuery from "../../graphql/queries/locations/getAllCities";
import {graphqlRequest} from "./index";

export function getAllCities() {
    const query = getAllCitiesQuery;
    return graphqlRequest(query);
}