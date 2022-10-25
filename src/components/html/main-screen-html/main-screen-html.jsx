import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import BasicHtml from '../basic-html/basic-html';
import HtmlStructure from '../html-structure/html-structure';
import TextMarkup from '../text-markup/text-markup';
import Links from '../links/links';
import Images from '../images/images';
import Favicon from '../images/favicon';
import SVG from '../images/svg';
import Tables from '../tables/tables';
import Forms from '../forms/forms';
import FormValidation from '../forms/form-validation';
import AboutId from '../about-id/about-id';
import AboutCrossoriginAndCors from '../about-crossorigin-and-cors/about-crossorigin-and-cors';
import SemanticMarkup from '../semantic-markup/semantic-markup';
import HtmlStandard from '../html-standard/html-standard';
import AboutValidator from '../about-validator/about-validator';
import ToTopButton from '../../to-top-button/to-top-button';
import AtribbuteContentEditable from '../attribute-content-editable/attribute-content-editable';

function MainAboutHTML() {
  const meta = {
    title: 'About HTML',
  };

  const [state, setState] = useState({
    activeItem: {
      ['basic-html']: true,
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

  const setStateFunction = (value) => setState({activeItem: {[value]: true}});

  return (
    <DocumentMeta {...meta}>
      <Header />
      <main className="page__main" onWheel={listenScrollEvent}>
        <div className="main-section">
          <h1>Основа основ веба</h1>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('basic-html')}
              >Основы HTML
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('structure-html')}
              >Структура HTML-документа
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('semantic-markup')}
              >Семантическая разметка
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setStateFunction('text-markup')}
                  >Разметка текста
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setStateFunction('html-standard')}
                  >Как работать со стандартом
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setStateFunction('validator')}
                  >О валидаторе html
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('links')}
              >Ссылки
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('images')}
              >Изображения
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setStateFunction('favicon')}
                  >Favicon
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setStateFunction('svg')}
                  >SVG - scalable vector graphics
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('tables')}
              >Таблицы в HTML
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('forms')}
              >Формы в HTML
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setStateFunction('form-validation')}
                  >Form validation
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('about-id')}
              >Атрибут id
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('about-crossorigin-and-cors')}
              >Атрибут crossorigin и политика CORS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setStateFunction('attribute-content-editable')}
              >Атрибут contentEditable
              </Link>
            </li>
          </ul>
        </div>
        <div className="theory">
          {(state.activeItem['basic-html']) && <BasicHtml />}
          {(state.activeItem['structure-html']) && <HtmlStructure />}
          {(state.activeItem['text-markup']) && <TextMarkup />}
          {(state.activeItem['links']) && <Links />}
          {(state.activeItem['images']) && <Images />}
          {(state.activeItem['favicon']) && <Favicon />}
          {(state.activeItem['svg']) && <SVG />}
          {(state.activeItem['tables']) && <Tables />}
          {(state.activeItem['forms']) && <Forms />}
          {(state.activeItem['form-validation']) && <FormValidation />}
          {(state.activeItem['semantic-markup']) && <SemanticMarkup />}
          {(state.activeItem['html-standard']) && <HtmlStandard />}
          {(state.activeItem['validator']) && <AboutValidator />}
          {(state.activeItem['about-id']) && <AboutId />}
          {(state.activeItem['about-crossorigin-and-cors']) && <AboutCrossoriginAndCors />}
          {(state.activeItem['attribute-content-editable']) && <AtribbuteContentEditable />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutHTML;
