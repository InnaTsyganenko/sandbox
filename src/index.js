import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Router as BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './store/root-reducer';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import browserHistory from './browser-history';

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

const persistor = persistStore(store);

const body = document.querySelector('body');

browserHistory.listen((location) =>  {
  if (location.pathname.indexOf('projects-and-crafts') === 1) {
    return body.style.background = 'rgb(207, 189, 209)';
  }
  if (location.pathname.indexOf('scratchpad') === 1) {
    return body.style.background = 'rgb(249 248 236)';
  }
  return body.style.backgroundImage = 'radial-gradient(circle farthest-corner at center, rgb(226, 240, 255) 0%, rgb(205, 230, 255) 100%)';
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
