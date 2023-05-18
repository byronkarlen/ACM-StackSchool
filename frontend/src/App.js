import BlogPage from './dynamic/BlogPage'
import HomePage from './static/HomePage'

import {useState} from 'react';

function App() {
  console.log('Rendering App component');

  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'home'){
    return <HomePage setCurrentPage={setCurrentPage} />;
  } else {
    return <BlogPage setCurrentPage={setCurrentPage} />
  }
}

export default App;