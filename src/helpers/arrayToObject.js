export function arrayToObject(arr, field) {
    let result = {};
    for (let element of arr){
        result[element[field].toString()] = element;
    }
    return result;
}