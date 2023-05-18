import './LoginPage.css';


const LoginPage = ({setCurrentPage}) => {
    return (
    <>
    <h1>Login Page</h1>
    <div className="navbar"> 
        <div className="container">
            <nav>
                <button onClick={() => setCurrentPage('blog-page')}>Blog</button>
                <button onClick={() => setCurrentPage('home-page')}>Home</button>
            </nav>
        </div>
    </div>
    </>
    );
}

export default LoginPage;
