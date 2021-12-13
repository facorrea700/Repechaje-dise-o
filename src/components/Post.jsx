import React from 'react';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
export default function Post(props) {
  const { name } = props;
  console.log(name);

  return (
    <div className="post-wrapper">
      <h1>Post</h1>
      <p>{name}</p>
    </div>
  );
}
