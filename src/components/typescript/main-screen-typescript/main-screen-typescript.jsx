import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import ToTopButton from '../../to-top-button/to-top-button';
import BasicTypescript from '../basic-typescript/basic-typescript';

function MainAboutTypescript() {
  const meta = {
    title: 'Typescript',
  };

  const [state, setState] = useState({
    activeItem: {
      ['basic-typescript']: true,
    },
  });

  const [scrollState, setScrollState] = useState(false);

  function listenScrollEvent() {
    if (window.scrollY > 500 ) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  }

  return (
    <DocumentMeta {...meta}>
      <Header />
      <main className="page__main" onWheel={listenScrollEvent}>
        <div className="main-section">
          <h1>Typescript</h1>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['basic-typescript']: true}})}
              >Основы Typescript
              </Link>
            </li>
          </ul>
        </div>
        <div className="theory">
          {(state.activeItem['basic-typescript']) && <BasicTypescript />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutTypescript;
