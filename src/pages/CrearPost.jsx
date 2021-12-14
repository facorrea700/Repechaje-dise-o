import { React, useState } from 'react';
import axios from 'axios';

function CrearPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [userId, setUserId] = useState('');
  if (userId === '') {
    const User = JSON.parse(localStorage.getItem('Facebook2_user'));
    setUserId(User.id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserId(JSON.stringify(localStorage.getItem('Facebook2_user')).id);
    const post = {
      title,
      content,
      image,
      userId,
    };
    console.log(post);
    axios
      .post('https://repechaje-backend.herokuapp.com/posts', post)
      .then((res) => {
        console.log(res);
        if (res.request.status === 201) {
          alert('post creado');
          window.location.href = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Create post</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input type="submit" value="Create post" />
      </form>
    </div>
  );
}

export default CrearPost;
