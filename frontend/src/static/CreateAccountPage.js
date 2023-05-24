import './CreateAccountPage.css';
import { useState } from 'react';
import axios from 'axios';

function CreateAccountPage({changePage, changeUser}){
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const URL = "http://localhost:8080";
    
    function handleUsernameChange(event){
        setText1(event.target.value);
    }

    function handlePasswordChange(event){
        setText2(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault(); // This is important!!

        axios.post(URL + '/users/new', {
            username: text1,
            password: text2
        })
        .then(response => {
            console.log(response);

            if(response.data.error == undefined){
                changeUser(response.data.username);
                changePage('blog-page');
            }
            else{
                alert(response.data.error);
            }
        })
        .catch(console.error)
    }

    return (
    <>
        <h1>Create Account Page</h1>
        <button onClick={() => changePage('home-page')}>Home</button>
        <button onClick={() => changePage('login-page')}>Login</button>


        <form onSubmit={handleSubmit}>
            <label>New Username: 
                <input type="text" value={text1} onChange={handleUsernameChange} />
            </label>
            <label>New Password: 
                <input type="text" value={text2} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </>);

}

export default CreateAccountPage;