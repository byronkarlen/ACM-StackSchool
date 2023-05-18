import './BlogPage.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function BlogPage({setCurrentPage}) {

  const [posts, setPosts] = useState([]); 
  const [newPostAdded, setNewPostAdded] = useState(0);
  const [message, setMessage] = useState('');

  const URL = "http://localhost:8080";

  useEffect(() => {
    const getFeed = () => {
        console.log('getting feed');
          axios.get(URL + "/feed")
          .then(response => {
            setPosts(response.data);
          })
          .catch(console.error)
    }

    console.log('HERE:');
    getFeed(); 
  }, []); 

  function addPost(){

    if(message === ''){
      alert('message cannot be empty!')
      return;
    }

    axios.post(URL + '/feed/new', {
      content: message, 
      user: "Byron Karlen"
    }).then(response => {
        console.log(response);
        const newPost = response.data;
        setPosts([...posts, newPost]);})
    .catch(console.error)

    setMessage('');
    setNewPostAdded(!newPostAdded);
  }

  function formatDate(timestamp){
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    });
    return formattedDate;
  }


  return (
    <div>
        <div>
        <button onClick={() => setCurrentPage('home')}>Home Page</button>
        </div>
      <div>
        <input
        type='text'
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Message...'
        value={message}
        />
        <button onClick={() => addPost()}>Post</button>
      </div>

      {posts.map((post, i) => 
        <div key={i}>
          <h3>{post.user}</h3>
          <p>{post.content}</p>
          <p>{post.num_likes} Likes </p>
          <p>{formatDate(post.timestamp)}</p>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
