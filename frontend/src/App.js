import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  const [posts, setPosts] = useState([]); 
  const [newPostAdded, setNewPostAdded] = useState(0);
  const [message, setMessage] = useState('');

  const URL = "http://localhost:8080";
  const getFeed = () => {
    console.log('getting feed');
      axios.get(URL + "/feed")
      .then(response => {
        setPosts(response.data);
      })
      .catch(console.error)

  }

  useEffect(() => {
    console.log('HERE:');
    getFeed(); 
  }, [newPostAdded]); 

  function addPost(){

    if(message === ''){
      alert('message cannot be empty!')
      return;
    }

    axios.post(URL + '/feed/new', {
      content: message, 
      user: "testuser"
    }).then(response => console.log(response))
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
        <input
        type='text'
        onChange={(e) => setMessage(e.target.value)}
        placeholder='message here!!!'
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

export default App;
