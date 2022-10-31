import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import ToTopButton from '../../to-top-button/to-top-button';
import BasicJS from '../basic-js/basic-js';
import Variables from '../variables/variables';
import AjaxAndSPA from '../ajax-and-spa/ajax-and-spa';
import AreasOfVisibility from '../areas-of-visibility/areas-of-visibility';
import Arrays from '../arrays/arrays';
import Objects from '../objects/objects';
import ArrowFunction from '../arrow-function/arrow-function';
import DataTypesInJS from '../data-types-in-js/data-types-in-js';
import DataStructures from '../data-structures/data-structures';
import Events from '../events/events';
import EcmaScriptModules from '../ecma-script-modules/ecma-script-modules';
import DocumentObjectModel from '../document-object-model/document-object-model';
import FormsInJS from '../forms-in-js/forms-in-js';
import Function from '../function/function';
import InstructionsAndOperations from '../instruction-and-operations/instruction-and-operations';
import Methods from '../methods/methods';
import OperatorsIfAndSwitch from '../operators/operators-if-and-switch';
import OperatorsSpreadAndRest from '../operators/operators-spread-and-rest';
import OperatorDelete from '../operators/operator-delete';
import Properties from '../properties/properties';
import ManipulationWithDOM from '../manipulation-with-dom/manipulation-with-dom';
import Cases from '../cases/cases';
import SPAAndMVP from '../spa-and-mvp/spa-and-mvp';
import StyleInJS from '../style-in-js/style-in-js';
import Scrolling from '../scrolling/scrolling';
import DragAndDrop from '../drag-and-drop/drag-and-drop';
import DatesandTimes from '../dates-and-times/dates-and-times';
import WorkWithVideo from '../work-with-video/work-with-video';
import AboutProgramming from '../oop/oop';
import ArchitectureOfFrontEndApplications from '../architecture-of-front-end-applications/architecture-of-front-end-applications';
import DemoToMVP from '../demo-to-mvp/demo-to-mvp';
import DemoEnumeratingObjectKeys from '../demo-enumerating-object-keys/demo-enumerating-object-keys';
import DemoWhatsNewInEs2015Objects from '../demo-whats-new-in-es2015-objects/demo-whats-new-in-es2015-objects';
import DemoDataBinding from '../demo-data-binding/demo-data-binding';
import DemoPatternObserver from '../demo-pattern-observer/demo-pattern-observer';
import Mock from '../mock/mock';
import String from '../string/string';
import { ContentsJS } from '../../../const';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from '../../../store/user/selectors';
import { changeCurrentPage } from '../../../store/action';

function MainAboutCSS() {

  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);

  const [title, setTitle] = useState(currentPage === '' ? ContentsJS[0].name : ContentsJS.find((element) => element.state === currentPage).name);
  const [state, setState] = useState(currentPage === '' ? ContentsJS[0].state : currentPage);

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
          <h1>the basics of magic<br /> on the web</h1>
          {ContentsJS.length > 0 && (
            <ul>
              {ContentsJS.map((content) => (
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
          {(state === 'basic-js') && <BasicJS />}
          {(state === 'variables') && <Variables />}
          {(state === 'instruction-and-operations') && <InstructionsAndOperations />}
          {(state === 'ajax-and-spa') && <AjaxAndSPA />}
          {(state === 'areas-of-visibility') && <AreasOfVisibility />}
          {(state === 'arrays') && <Arrays />}
          {(state === 'objects') && <Objects />}
          {(state === 'arrow-function') && <ArrowFunction />}
          {(state === 'data-types-in-js') && <DataTypesInJS />}
          {(state === 'data-structures') && <DataStructures />}
          {(state === 'events') && <Events />}
          {(state === 'ecma-script-modules') && <EcmaScriptModules />}
          {(state === 'document-object-model') && <DocumentObjectModel />}
          {(state === 'forms-in-js') && <FormsInJS />}
          {(state === 'function') && <Function />}
          {(state === 'methods') && <Methods />}
          {(state === 'operators-if-and-switch') && <OperatorsIfAndSwitch />}
          {(state === 'operators-spread-and-rest') && <OperatorsSpreadAndRest />}
          {(state === 'operator-delete') && <OperatorDelete />}
          {(state === 'properties') && <Properties />}
          {(state === 'manipulation-with-dom') && <ManipulationWithDOM />}
          {(state === 'cases') && <Cases />}
          {(state === 'spa-and-mvp') && <SPAAndMVP />}
          {(state === 'style-in-js') && <StyleInJS />}
          {(state === 'scrolling') && <Scrolling />}
          {(state === 'drag-and-drop') && <DragAndDrop />}
          {(state === 'dates') && <DatesandTimes />}
          {(state === 'work-with-video') && <WorkWithVideo />}
          {(state === 'oop') && <AboutProgramming />}
          {(state === 'architecture-of-front-end-applications') && <ArchitectureOfFrontEndApplications />}
          {(state === 'demo-to-mvp') && <DemoToMVP />}
          {(state === 'demo-enumerating-object-keys') && <DemoEnumeratingObjectKeys />}
          {(state === 'demo-whats-new-in-es2015-objects') && <DemoWhatsNewInEs2015Objects />}
          {(state === 'demo-data-binding') && <DemoDataBinding />}
          {(state === 'demo-pattern-observer') && <DemoPatternObserver />}
          {(state === 'demo-to-mvp') && <DemoToMVP />}
          {(state === 'mock') && <Mock />}
          {(state === 'string') && <String />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
