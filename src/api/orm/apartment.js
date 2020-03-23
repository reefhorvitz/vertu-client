import Request from './index';
export function createProperty(property) {
    return Request.post('properties/', property)
}