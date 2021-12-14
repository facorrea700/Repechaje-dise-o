import axios from 'axios';
import React from 'react';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function Post(props) {
  // eslint-disable-next-line
  const { title, content, img, likes, id } = props;
  const deletePost = () => {
    axios.delete(`https://repechaje-backend.herokuapp.com/posts/${props.id}`).then((res) => {
      if (res.request.status === 200) {
        alert('Post eliminado correctamente');
      } else {
        alert('Error al eliminar el post');
      }
    });
  };
  const likePost = () => {
    const userId = JSON.parse(localStorage.getItem('Facebook2_user')).id;
    const actualLikes = props.likes;
    const newLikes = actualLikes + 1;
    const modifiedPost = {
      title,
      content,
      userId,
      image: img,
      likes: newLikes,
    };
    axios
      .patch(`https://repechaje-backend.herokuapp.com/posts/${props.id}`, modifiedPost)
      .then((res) => {
        if (res.request.status === 200) {
          alert('Post likeado correctamente no te abuses! :D');
          window.location.href = '/';
        }
      });
  };

  const modifyPost = () => {
    const actualPost = {
      id,
      title,
      content,
      image: img,
      userId: JSON.parse(localStorage.getItem('Facebook2_user')).id,
    };
    localStorage.setItem('postAModificar', JSON.stringify(actualPost));
    window.location.href = '/ModificarPost';
  };
  return (
    <div className="post-wrapper">
      <h1 className="title">{title}</h1>
      <p className="description">{content}</p>
      <img src={img} alt="link a la imagen roto" />
      <div className="post-control">
        <button type="button" onClick={deletePost}>
          Delete
        </button>
        <button type="button" onClick={likePost}>
          {likes}
        </button>
        <button type="button" onClick={modifyPost}>
          Modify
        </button>
      </div>
    </div>
  );
}
