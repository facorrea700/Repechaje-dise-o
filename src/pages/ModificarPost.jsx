import { React, useState } from 'react';
import axios from 'axios';

function ModificarPost() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [userId, setUserId] = useState('');

  if (title === '') {
    setContent(JSON.parse(localStorage.getItem('postAModificar')).content);
    setImage(JSON.parse(localStorage.getItem('postAModificar')).image);
    setTitle(JSON.parse(localStorage.getItem('postAModificar')).title);
    setUserId(JSON.parse(localStorage.getItem('postAModificar')).userId);
    setId(JSON.parse(localStorage.getItem('postAModificar')).id);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title,
      content,
      image,
      userId,
    };
    console.log(post);
    axios
      .patch(`https://repechaje-backend.herokuapp.com/posts/${id}`, post)
      .then((res) => {
        if (res.request.status === 200) {
          alert('Post modificado correctamente');
          window.location.href = '/';
        } else {
          alert('Error al modificar el post');
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
        <input type="submit" value="Modify post" />
      </form>
    </div>
  );
}

export default ModificarPost;
