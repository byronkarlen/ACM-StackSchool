import './CreateAccountPage.css';

function CreateAccountPage({changePage, changeUser}){

    return (
    <>
        <h1>Create Account Page</h1>
        <button onClick={() => changePage('home-page')}>Home</button>
        <button onClick={() => changePage('login-page')}>Login</button>
    </>);

}

export default CreateAccountPage;