import './HomePage.css';


const HomePage = ({setCurrentPage}) => {
    return (
    <>
    <h1>Home Page</h1>
    <div className="navbar"> 
        <div className="container">
            <nav>
                <button onClick={() => setCurrentPage('login-page')}>Login</button>
            </nav>
        </div>
    </div>
    </>
    );
}

export default HomePage;
