import Request from './index'

export async function uploadImage(image) {
    const {url} = await Request.post('upload-image/', image, {'content-type': 'multipart/form-data'})
    return url
}