export const ADD_POST = '@@posts/ADD_POST';
export const ADD_POSTS= '@@posts/ADD_POSTS';
export const SET_ERROR = '@@posts/SET_ERROR';
export const DELETE_POST = '@@posts/DELETE_POST';
export const SET_LOADING = '@@posts/SET_LOADING';


const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
})

const addPosts = (posts) => ({
    type: ADD_POSTS,
    payload: posts,
})

const setLoading = () => ({
    type: SET_LOADING,
})

const setError = () => ({
    type: SET_ERROR,
})


export const loadPosts = () => (dispatch, _, client) => {
    dispatch(setLoading())

    client.get("https://jsonplaceholder.typicode.com/posts?userId=10")
        .then(data => dispatch(addPosts(data)))
        .catch(err => dispatch(setError(err)))
}

export const createPost = (title, body) => (dispatch, _, client) => {
    client.post('https://jsonplaceholder.typicode.com/posts', { 
        title,
        body,
        userId:10,
    })
        .then(newPost => dispatch(addPost(newPost)))
        .catch(err => dispatch(setError(err)))
}

