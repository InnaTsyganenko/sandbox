import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import ToTopButton from '../../to-top-button/to-top-button';
import BasicPHP from '../basic-php/basic-php';
// import Vscode from '../vscode/vscode';

function MainAboutCSS() {
  const meta = {
    title: 'About PHP',
  };

  const [state, setState] = useState({
    activeItem: {
      ['basic-php']: true,
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
          <h1>Основа основ веба</h1>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['basic-php']: true}})}
              >Основы PHP
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['vscode']: true}})}
              >Нюансы работы с VSCode
              </Link>
            </li>
          </ul>
        </div>
        <div className="theory">
          {(state.activeItem['basic-php']) && <BasicPHP />}
          {/* {(state.activeItem['vscode']) && <Vscode />} */}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
