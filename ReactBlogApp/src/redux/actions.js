export const ADD = "ADD";
export const DELET = "DELET";
export const UPDATE = "UPDATE";
export const like = "like";

export function add(blog) {
    return {
        type:ADD,
        payload: blog,
        Date : Date.now(),
    }
}

export function delet(blogId) {
    return {
        type:DELET,
        payload: blogId,
    }
}


export function update(blog) {
    return {
        type:UPDATE,
        payload: blog,
    }
}
export function liked(){
    return{
        type :like,
        
    }
}
