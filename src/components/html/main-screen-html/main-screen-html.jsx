import React, { useState } from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router-dom';
import { ContentsHtml } from '../../../const';
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
import {useDispatch, useSelector} from 'react-redux';
import { getCurrentPage } from '../../../store/user/selectors';
import { changeCurrentPage } from '../../../store/action';

function MainAboutHTML() {

  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);

  const [title, setTitle] = useState(currentPage === '' ? ContentsHtml[0].name : ContentsHtml.find((element) => element.state === currentPage).name);
  const [state, setState] = useState(currentPage === '' ? ContentsHtml[0].state : currentPage);

  const meta = {
    title: title,
  };

  const [scrollState, setScrollState] = useState(false);

  const setStateFunction = (name, key) => {
    setTitle(name);
    setState(key);
    dispatch(changeCurrentPage(key));
  };

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
          {ContentsHtml.length > 0 && (
            <ul>
              {ContentsHtml.map((content) => (
                <li className="" id="" key={content.state}>
                  <Link
                    className=""
                    onClick={() => setStateFunction(content.name, content.state)}
                    to="#"
                  >{content.name}
                  </Link>
                </li>))}
            </ul>
          )}
        </div>
        <div className="theory">
          {(state === 'basic-html') && <BasicHtml />}
          {(state === 'structure-html') && <HtmlStructure />}
          {(state === 'text-markup') && <TextMarkup />}
          {(state === 'links') && <Links />}
          {(state === 'images') && <Images />}
          {(state === 'favicon') && <Favicon />}
          {(state === 'svg') && <SVG />}
          {(state === 'tables') && <Tables />}
          {(state === 'forms') && <Forms />}
          {(state === 'form-validation') && <FormValidation />}
          {(state === 'semantic-markup') && <SemanticMarkup />}
          {(state === 'html-standard') && <HtmlStandard />}
          {(state === 'validator') && <AboutValidator />}
          {(state === 'attribute-id') && <AboutId />}
          {(state === 'about-crossorigin-and-cors') && <AboutCrossoriginAndCors />}
          {(state === 'attribute-content-editable') && <AtribbuteContentEditable />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}

export default MainAboutHTML;
