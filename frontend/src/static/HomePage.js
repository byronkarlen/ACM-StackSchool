import './HomePage.css';
import Nav from '../Nav'


const HomePage = ({changePage, currentUser}) => {

    if (currentUser ===''){
        return (
            <>
            <h1>Home</h1>
            <button onClick={() => changePage('login-page')}>Login</button>
            <button onClick={() => changePage('create-account-page')}>Create Account</button>
            </>
        );
    }
    else{
        return (
            <>
            <h1>Home</h1>
            <button onClick={() => changePage('login-page')}>Login</button>
            <button onClick={() => changePage('create-account-page')}>Create Account</button>
            <button onClick={() => changePage('blog-page')}>Blog</button>
            </>
        );
    }

}

export default HomePage;
