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
    let posts = [];
    const pegarle = 'https://repechaje-backend.herokuapp.com/posts/';
    axios.get(pegarle + User.id).then((res) => {
      if (res.request.status === 200) {
        posts = JSON.stringify(res.data);
        console.log(posts);
      }
    });
    return (
      <div>
        <h1>App</h1>
        <Post title={posts.title} />
        <p>fiumba</p>
      </div>
    );
  }
}

export default App;
