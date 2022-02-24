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
