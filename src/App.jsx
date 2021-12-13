import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Post from './components/Post';

function App() {
  const history = useHistory();
  if (localStorage.getItem('Facebook2_user') === null) {
    history.push('/login');
  } else {
    const User = JSON.parse(localStorage.getItem('Facebook2_user'));
    const userId = User.id.toString();
    console.log(userId);
    const pegarle = 'https://repechaje-backend.herokuapp.com/posts';
    axios.get(pegarle, { headers: { id: ` ${User.id}` } }).then((res) => {
      console.log(res);
      if (res.request.status === 200) {
        // alert('trayendo posts');
        const post = JSON.stringify(res.data);
        console.log(post);
      }
    });
    return (
      <div>
        <h1>App</h1>
        <Post />
        <p>fiumba</p>
      </div>
    );
  }
}

export default App;
