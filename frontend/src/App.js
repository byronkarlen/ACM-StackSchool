import BlogPage from './dynamic/BlogPage'
import HomePage from './static/HomePage'
import LoginPage from './static/LoginPage'

import {useState} from 'react';

function App() {
  console.log('Rendering App component');

  const [currentPage, setCurrentPage] = useState('home-page');
  // const [currentUser, setCurrentUser] = useState('');

  if (currentPage === 'home-page'){
    return <HomePage setCurrentPage={setCurrentPage} />;
  } 
  else if (currentPage === 'login-page'){
    return <LoginPage setCurrentPage={setCurrentPage}/>;
  }
  else if(currentPage === 'blog-page'){
    return <BlogPage setCurrentPage={setCurrentPage} />;
  }

}

export default App;