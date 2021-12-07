import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../../header/header';
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
import AboutProgramming from '../about-programming/about-programming';

function MainAboutCSS() {
  const meta = {
    title: 'About JS',
  };

  const [state, setState] = useState({
    activeItem: {
      ['basic-js']: true,
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
          <h1>the basics of magic<br /> on the web</h1>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['about-programming']: true}})}
              >ООП и Javascript
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['basic-js']: true}})}
              >Основы JS
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['variables']: true}})}
                  >Variables
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['instruction-and-operations']: true}})}
                  >Instructions And Operations
                  </Link>
                </li>
                <li>Operators
                  <ul>
                    <li>
                      <Link to="#"
                        onClick={() => setState({activeItem: {['operators-if-and-switch']: true}})}
                      >Operators if and switch
                      </Link>
                    </li>
                    <li>
                      <Link to="#"
                        onClick={() => setState({activeItem: {['operators-spread-and-rest']: true}})}
                      >Operators spread and rest
                      </Link>
                    </li>
                    <li>
                      <Link to="#"
                        onClick={() => setState({activeItem: {['operator-delete']: true}})}
                      >Operator delete
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['data-types-in-js']: true}})}
                  >Data types in JS
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['function']: true}})}
              >Function
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['areas-of-visibility']: true}})}
                  >Areas Of Visibility
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['data-structures']: true}})}
              >Data Structures
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['objects']: true}})}
                  >Objects
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['arrays']: true}})}
                  >Arrays
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['events']: true}})}
              >Events
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['dates']: true}})}
              >DatesandTimes
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['forms-in-js']: true}})}
              >Forms in JS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['style-in-js']: true}})}
              >Style in JS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['scrolling']: true}})}
              >Scrolling
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['drag-and-drop']: true}})}
              >Drag &amp; Drop
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['work-with-video']: true}})}
              >Work with video HTML5
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['document-object-model']: true}})}
              >Document Object Model
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['manipulation-with-dom']: true}})}
                  >Manipulation with DOM
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['methods']: true}})}
                  >Methods
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['properties']: true}})}
                  >Properties
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['ecma-script-modules']: true}})}
              >Ecma-script modules
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['arrow-function']: true}})}
                  >Arrow function
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['spa-and-mvp']: true}})}
              ><abbr data-title="Single-Page Application">SPA</abbr> and <abbr data-title="Model View Presenter">MVP</abbr>
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['ajax-and-spa']: true}})}
              >Ajax &amp; SPA
              </Link>
            </li>
          </ul>
          <Link to="#"
            onClick={() => setState({activeItem: {['cases']: true}})}
          >Cases
          </Link>
        </div>
        <div className="theory">
          {(state.activeItem['basic-js']) && <BasicJS />}
          {(state.activeItem['variables']) && <Variables />}
          {(state.activeItem['instruction-and-operations']) && <InstructionsAndOperations />}
          {(state.activeItem['ajax-and-spa']) && <AjaxAndSPA />}
          {(state.activeItem['areas-of-visibility']) && <AreasOfVisibility />}
          {(state.activeItem['arrays']) && <Arrays />}
          {(state.activeItem['objects']) && <Objects />}
          {(state.activeItem['arrow-function']) && <ArrowFunction />}
          {(state.activeItem['data-types-in-js']) && <DataTypesInJS />}
          {(state.activeItem['data-structures']) && <DataStructures />}
          {(state.activeItem['events']) && <Events />}
          {(state.activeItem['ecma-script-modules']) && <EcmaScriptModules />}
          {(state.activeItem['document-object-model']) && <DocumentObjectModel />}
          {(state.activeItem['forms-in-js']) && <FormsInJS />}
          {(state.activeItem['function']) && <Function />}
          {(state.activeItem['methods']) && <Methods />}
          {(state.activeItem['operators-if-and-switch']) && <OperatorsIfAndSwitch />}
          {(state.activeItem['operators-spread-and-rest']) && <OperatorsSpreadAndRest />}
          {(state.activeItem['operator-delete']) && <OperatorDelete />}
          {(state.activeItem['properties']) && <Properties />}
          {(state.activeItem['manipulation-with-dom']) && <ManipulationWithDOM />}
          {(state.activeItem['cases']) && <Cases />}
          {(state.activeItem['spa-and-mvp']) && <SPAAndMVP />}
          {(state.activeItem['style-in-js']) && <StyleInJS />}
          {(state.activeItem['scrolling']) && <Scrolling />}
          {(state.activeItem['drag-and-drop']) && <DragAndDrop />}
          {(state.activeItem['dates']) && <DatesandTimes />}
          {(state.activeItem['work-with-video']) && <WorkWithVideo />}
          {(state.activeItem['about-programming']) && <AboutProgramming />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
