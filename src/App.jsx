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
        localStorage.setItem('Facebook2_posts', posts);
      }
    });
    posts = JSON.parse(localStorage.getItem('Facebook2_posts'));
    if (posts === []) {
      return (
        <div className="form">
          <h1>No tienes posts...</h1>
        </div>
      );
    }
    return (
      <div className="form">
        {posts.map((post) => (
          <Post
            title={post.title}
            content={post.content}
            img={post.image}
            id={post.id}
            likes={post.likes}
          />
        ))}
      </div>
    );
  }
}

export default App;
