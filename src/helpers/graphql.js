export function flattenObject(obj) {
    if(typeof obj == 'object' && obj !== null){
        if(obj.length){
            return obj.map(item => flattenObject(item))
        }
        else if (obj.edges){
            return obj.edges.map(node => {
                let property = node.node;
                if(typeof property === 'object'){
                    return flattenObject(property)
                }
            });
        }
        else {
            for(let key in obj){
                obj[key] = flattenObject(obj[key]);
            }
            return obj;
        }
    }
    else return obj;
}