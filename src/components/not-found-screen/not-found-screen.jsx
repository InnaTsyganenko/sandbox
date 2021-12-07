import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <div className="page-footer">
        <p>Oooops!</p>
        <h2>404. The page does not exist.</h2>
        <h3>Go to <Link to="/" style={{color: 'inherit'}}> main page</Link>?</h3>
      </div>
    </div>
  );
}

export default NotFoundScreen;
