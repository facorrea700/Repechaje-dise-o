import React from 'react';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  if (localStorage.getItem('Facebook2_user') === null) {
    history.push('/login');
  }
  return (
    <div>
      <h1>App</h1>
      <p>fiumba</p>
    </div>
  );
}

export default App;
