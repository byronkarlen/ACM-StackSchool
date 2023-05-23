import './HomePage.css';
import Nav from '../Nav'


const HomePage = ({changePage}) => {
    return (
    <>
        <button onClick={() => changePage('login-page')}>Login</button>
        <button onClick={() => changePage('create-account-page')}>Create Account</button>
    </>
    );
}

export default HomePage;
