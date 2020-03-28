import Request from './index';

export function createAppointment(time, propertyId, userId) {
    return Request.post('appointments/', {time, propertyId, userId});
}