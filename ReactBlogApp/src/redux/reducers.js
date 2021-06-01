import { ADD, UPDATE, DELET, like } from './actions';
import { Blogs } from './states';



export let reducer = (state = Blogs, action) => {
    let newBlogs;
    switch (action.type) {
        case ADD:
            newBlogs = [...state];
            newBlogs.push(action.payload);
            return newBlogs;
        case DELET:
            newBlogs = [...state];
            newBlogs = newBlogs.filter(todo => todo.id !== action.payload);
            return newBlogs;
        case UPDATE:
            newBlogs = [...state];
            let index = -1;
            for (let i = 0; i < newBlogs.length; i++) {
                index++;
                if (newBlogs[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newBlogs[index] = action.payload;
                return newBlogs;
            }

        case like:
            liked();

            
    }

    function liked(){
        console.log(1);
    }
    return state;


}