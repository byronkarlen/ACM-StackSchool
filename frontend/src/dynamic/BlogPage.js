import './BlogPage.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Nav from '../Nav'

function BlogPage({changePage}) {
  
    const [posts, setPosts] = useState([]); 
    const [message, setMessage] = useState('');

    const URL = "http://localhost:8080";

    const getFeed = () => {
        axios.get(URL + "/feed")
        .then(response => {
            setPosts(response.data);
        })
        .catch(console.error)
    }

    useEffect(() => {
        getFeed();}, 
    []); 

    function addPost(){
        if(message === ''){
            alert('message cannot be empty!')
            return;
        }

        axios.post(URL + '/feed/new', {
            content: message, 
            user: "Byron Karlen"
        })
        .then(response => {
            console.log(response);
            setMessage('');
            getFeed();
        })
        .catch(console.error)
    }
    
    function deletePost(id){
        axios.delete(URL + '/feed/delete/' + id)
        .then(response => {
            console.log(response)
            getFeed();
        })
        .catch(console.error);
    }
    
    function likePost(id){
        axios.put(URL + '/feed/like/' + id)
        .then(response => {
            console.log(response)
            getFeed();
        })
        .catch(console.error);
    }


    return (
    <div>
        <Nav changePage={changePage}/>
        <h1>Blog Page</h1>
        <div>
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
            <button onClick={() => likePost(post._id)}>Like Post</button>
            <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
        )}
    </div>
    );
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

export default BlogPage;
