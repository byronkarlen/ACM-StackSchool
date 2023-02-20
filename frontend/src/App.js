import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  let [posts, setPosts] = useState([]); //this is problematic
  const [message, setMessage] = useState('');

  const URL = "http://localhost:8080";
  const getFeed = () =>{
    axios.get(URL + "/feed")
      .then(response => {
        setPosts(response.data);
      })
      .catch(console.error)   
  }

  useEffect(() => {
    getFeed();
  }, [posts]); //Only call API once when it initially loads

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
          <p>{post.num_likes} {post.timestamp}</p>
        </div>
      )}
    </div>
  );
}

export default App;
