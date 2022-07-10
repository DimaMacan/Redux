import {useSelector} from 'react-redux';
import { Post } from './Post';
const PostsList = () => {
    const {list: posts} = useSelector(state => state.posts)
    return (
      <div className='postList'>
        <h2 className='postList-title'>Всего постов: {posts.length}</h2>
        <div className='postContainer'> 
        {
          posts.map(post => <Post key={post.id}props={post}/>)
        }
        </div>
      </div>
    )
  }
  
  export {PostsList};