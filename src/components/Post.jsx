import React from 'react';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function Post(props) {
  const { title, content, img } = props;
  const { likes } = props;
  console.log(img);
  return (
    <div className="post-wrapper">
      <h1 className="title">{title}</h1>
      <p className="description">{content}</p>
      <img src={img} alt="link a la imagen roto" />
      <p>{likes}</p>
    </div>
  );
}
