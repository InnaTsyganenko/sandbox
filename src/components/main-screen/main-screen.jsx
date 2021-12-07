import React from 'react';
import Header from '../header/header';
import DocumentMeta from 'react-document-meta';

function MainScreen() {
  const meta = {
    title: 'Inna Tsyganenko',
  };

  return (
    <DocumentMeta {...meta}>
      <React.Fragment>
        <Header />
        <main className="page__main-page-home">
          <img className="main-page-home__cactus" src="img/cactus.png" alt="Просто кактус, почему нет?" title="Просто кактус, почему нет?" width="200" height="464" />
        </main>
      </React.Fragment>
    </DocumentMeta>
  );
}
export default MainScreen;
