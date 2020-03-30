import Request from './index'

export function updateUserDetails(userId, name, phone, email) {
    return Request.put(`users/${userId}/`, {name, phone, email});
}