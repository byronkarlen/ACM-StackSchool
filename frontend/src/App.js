import BlogPage from './dynamic/BlogPage'
import HomePage from './static/HomePage'
import LoginPage from './static/LoginPage'
import CreateAccountPage from './static/CreateAccountPage'

import {useState, useEffect} from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('home-page');
  const [currentUser, setCurrentUser] = useState('');

  // Users mantain their state across page refresh
  useEffect(() => {
    setCurrentUser(window.localStorage.getItem('currentUser'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('currentUser', currentUser);
  }, [currentUser]);
  

  console.log('Rendering App component');
  console.log('Current user is ' + currentUser);

  function changePage(newPage){
    if(newPage === 'home-page'){
      setCurrentPage('home-page');
    }
    else if(newPage === 'login-page'){
      setCurrentPage('login-page');
    }
    else if(newPage === 'create-account-page'){
      setCurrentPage('create-account-page');
    }
    else if(newPage === 'blog-page'){
      setCurrentPage('blog-page');
    }
  }

  function changeUser(newUser){
    console.log("changing current user to " + newUser);
    setCurrentUser(newUser);
  }

  let output;
  if (currentPage === 'home-page'){
    output = <HomePage changePage={changePage} currentUser={currentUser} changeUser={changeUser}/>;
  } 
  else if (currentPage === 'login-page'){
    output = <LoginPage changePage={changePage} changeUser={changeUser}/>;
  }
  else if (currentPage === 'create-account-page'){
    output = <CreateAccountPage changePage={changePage} changeUser={changeUser}/>;
  }
  else if(currentPage === 'blog-page'){
    output = <BlogPage changePage={changePage} currentUser={currentUser} changeUser={changeUser}/>;
  }

  return (
    <div>{output}</div>
  );
}

export default App;