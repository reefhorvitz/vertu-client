import Request from './index';

export function getAllPropertyMetadata() {
    return Request.get('properties/metadata/');
}