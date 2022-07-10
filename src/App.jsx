import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import './App.css';

import { PostsList } from './components/PostsList';
import { loadPosts } from './store/posts/posts-action'
import { NewPost } from './components/NewPost';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch]);

  return (
    <div className="App">
      <NewPost />
      <PostsList />
    </div>
  );
}

export default App;
