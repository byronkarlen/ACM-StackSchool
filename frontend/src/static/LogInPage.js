import './LoginPage.css';
import { useState } from 'react';
import axios from 'axios';


const LoginPage = ({changePage, changeUser}) => {
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
        event.preventDefault(); // This is important!!@
        console.log('In handleSubmit()');
        axios.post(URL + '/login', {
            username: text1,
            password: text2
        })
        .then(response => {
            console.log(response);
            console.log('here');
            console.log(response.data.username);
            if(response.data.username){
                console.log('logged in!');
                changeUser(response.data.username);
                changePage('blog-page');
            }
            else{
                console.log('error logging in');
                alert('Incorrect username/password')
            }
        })
        .catch(console.error)
    }
    
    return (
        <>
        <button onClick={() => changePage('home-page')}>Home</button>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Username: 
                <input type="text" value={text1} onChange={handleUsernameChange} />
            </label>
            <label>Password: 
                <input type="password" value={text2} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
        <section>
            <h2>Don't have an account. Create one here:</h2>
            <button onClick={() => changePage('create-account-page')}>Create Account</button>
        </section>
        </>
    );
}

export default LoginPage;
