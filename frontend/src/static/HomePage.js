import './HomePage.css';


const HomePage = ({setCurrentPage}) => {
    return (
    <>
    <div className="navbar"> 
        <div className="container">
            <nav>
                <button onClick={() => setCurrentPage('blog-page')}>My Blog Page</button>
            </nav>
        </div>
    </div>
    </>
    );
}

export default HomePage;
