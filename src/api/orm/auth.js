import Request from './index';

export async function validateTokenAuth(userEmail, token) {
    const {id, name, email, image, phone, type} = await Request.get(`login/?email=${userEmail}&token=${token}`);
    return {id, name, email, profile: image, phone, type}
}