import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import ToTopButton from '../../to-top-button/to-top-button';
import BasicReact from '../basic-react/basic-react';
import HistoryAPI from '../history-api/history-api';
import Hooks from '../hooks/hooks';
import ReactPatterns from '../react-patterns/react-patterns';
import ReactRouter from '../react-router/react-router';
import AboutRedux from '../redux/redux';
import JSX from '../jsx/jsx';
import CreateReactApp from '../create-react-app/create-react-app';
import WorkWithForm from '../work-with-form/work-with-form';
import Optimization from '../optimization/optimization';
import { ItemsMenuReactScreen } from '../../../const';

function MainAboutCSS() {
  const meta = {
    title: 'About React',
  };

  const [state, setState] = useState({
    activeItem: {
      ['basic-react']: true,
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
          <h1>Упрости этот интерфейс</h1>
          <ul>
            {ItemsMenuReactScreen.map((item) => (
              <li key={item.state}>
                <Link to="#"
                  onClick={() => setState({activeItem: {[item.state]: true}})}
                >{item.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3>Articles</h3>
          <ul>
            <li><a href="https://round.fun/2020/09/08/react-native-how-to-use-redux-persist-for-nested-state/" target="_blank" rel="noopener noreferrer">Redux – How to use redux-persist for nested state in React Native?</a>
            </li>
            <li><a href="https://medium.com/nuances-of-programming/%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-react-redux-%D1%81-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%BE%D0%B9-reselect-e9f7afb09d39" target="_blank" rel="noopener noreferrer">Увеличиваем производительность приложения React + Redux с библиотекой Reselect</a></li>
            <li><a href="https://kitson-broadhurst.medium.com/simple-form-validation-with-react-hooks-usestate-and-useeffect-57620d808cc8" target="_blank" rel="noopener noreferrer">Form Validation with React Hooks — useState and useEffect</a></li>
            <li><a href="https://medium.com/@stasonmars/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D1%82%D1%80%D1%91%D0%BC-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D0%B0%D0%BC-%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2-react-2ca5c0c7464b" target="_blank" rel="noopener noreferrer">Руководство по трём способам стилизации в React</a></li>
            <li><a href="https://habr.com/ru/company/skillbox/blog/456972/" target="_blank" rel="noopener noreferrer">5 отличных способов анимировать React-приложения в 2019 году</a></li>
          </ul>
        </div>
        <div className="theory">
          {(state.activeItem['basic-react']) && <BasicReact />}
          {(state.activeItem['history-api']) && <HistoryAPI />}
          {(state.activeItem['hooks']) && <Hooks />}
          {(state.activeItem['react-patterns']) && <ReactPatterns />}
          {(state.activeItem['react-router']) && <ReactRouter />}
          {(state.activeItem['redux']) && <AboutRedux />}
          {(state.activeItem['jsx']) && <JSX />}
          {(state.activeItem['create-react-app']) && <CreateReactApp />}
          {(state.activeItem['work-with-form']) && <WorkWithForm />}
          {(state.activeItem['memo']) && <Optimization />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
