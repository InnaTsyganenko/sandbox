import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { ContentsPHP } from '../../../const';
import { changeCurrentPage } from '../../../store/action';
import { getCurrentPage } from '../../../store/user/selectors';
import Header from '../../header/header';
import ToTopButton from '../../to-top-button/to-top-button';
import BasicPHP from '../basic-php/basic-php';

function MainAboutCSS() {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);

  const [title, setTitle] = useState(currentPage === '' ? ContentsPHP[0].name : ContentsPHP.find((element) => element.state === currentPage).name);
  const [state, setState] = useState(currentPage === '' ? ContentsPHP[0].state : currentPage);

  const meta = {
    title: title,
  };

  const setStateFunction = (name, key) => {
    setTitle(name);
    setState(key);
    dispatch(changeCurrentPage(key));
  };

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
          {ContentsPHP.length > 0 && (
            <ul>
              {ContentsPHP.map((content) => (
                <li className="" id="" key={content.state}>
                  <Link
                    className=""
                    onClick={() => setStateFunction(content.title, content.state)}
                    to="#"
                  >{content.title}
                  </Link>
                </li>))}
            </ul>
          )}
        </div>
        <div className="theory">
          {(state === 'basic-php') && <BasicPHP />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
