import BlogPage from './dynamic/BlogPage'
import HomePage from './static/HomePage'
// import LogInPage from './static/LogInPage'
// import CreateAccountPage from './static/CreateAccountPage'

import {useState} from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState('home')
  // const [user, setUser] = useState('')

  if (currentPage === 'home'){
    return <HomePage setCurrentPage={setCurrentPage} />;
  // } else if (currentPage === 'log-in'){
  //   return <LogInPage setCurrentPage={setCurrentPage} setUser={setUser} />;
  // } else if (currentPage === 'create-account'){
  //   return <CreateAccountPage setUser={setUser} setCurrentPage={setCurrentPage} />;
  } else {
    return <BlogPage setCurrentPage={setCurrentPage} />
  }
}

export default App;