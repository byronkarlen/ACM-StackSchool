import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

    const URL = "http://localhost:8080";
    const getFeed = () =>{
      axios.get(URL + "/feed")
        .then(response => {
          console.log(response.data);
        })
        .catch(console.error)
      
    }

  return (
    <div>
      {/*getFeed()*/}
    </div>
  );
}

export default App;
