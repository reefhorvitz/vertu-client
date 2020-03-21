import { GraphQLClient } from 'graphql-request'
import {orm} from '../../config/config';
import {flattenObject} from "../../helpers/graphql";

const client = new GraphQLClient(orm.url+orm.graphqlEndpoint);

export const graphqlRequest = (query, shouldFlattenObject = true) => client.request(query).then(data => {
    if (shouldFlattenObject){
        return flattenObject(data)
    }
    else {
        return data;
    }
});