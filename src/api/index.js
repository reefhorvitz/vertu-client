 import axios from "axios";
export default class Request {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    get(path){
        return axios.get(this.serviceUrl + path).then(Request.getResData)
    }

    post(path, body, headers){
        return axios.post(this.serviceUrl + path, body, {headers}).then(Request.getResData)
    }

    put(path, body){
        return axios.put(this.serviceUrl + path, body).then(Request.getResData)
    }

    delete(path, body){
        return axios.delete(this.serviceUrl + path, body).then(Request.getResData)
    }

    static getResData(res){
        return res.data;
    }
}