import {useDispatch} from 'react-redux';

import {createPost} from '../store/posts/posts-action';

export const NewPost = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createPost(event.target.title.value, event.target.body.value));
    event.target.reset();
  };

  return (
    <form className="newsForm" onSubmit={handleSubmit}>
        <input 
          className="input"
          type="text" 
          name="title" 
          placeholder="title" />
        <input 
            className="input"
            type="text" 
            name="body"
            placeholder="text"
        />
        
        <input className='btn' type="submit" value="Add post" />
    </form>
  );
};