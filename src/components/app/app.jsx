import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import MainAboutHTML from '../html/main-screen-html/main-screen-html';
import MainAboutCSS from '../css/main-screen-css/main-screen-css';
import MainAboutReact from '../react/main-screen-react/main-screen-react';
import MainAboutJS from '../javascript/main-screen-js/main-screen-js';
import MainAboutPHP from '../php/main-screen-php/main-screen-php';
import MainAboutOther from '../other/main-screen-other/main-screen-other';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(props) {

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainScreen />
      </Route>
      <Route exact path={AppRoute.HTML}>
        <MainAboutHTML />
      </Route>
      <Route exact path={AppRoute.CSS}>
        <MainAboutCSS />
      </Route>
      <Route exact path={AppRoute.JS}>
        <MainAboutJS />
      </Route>
      <Route exact path={AppRoute.REACT}>
        <MainAboutReact />
      </Route>
      <Route exact path={AppRoute.PHP}>
        <MainAboutPHP />
      </Route>
      <Route exact path={AppRoute.OTHER}>
        <MainAboutOther />
      </Route>
      <Route >
        <NotFoundScreen />
      </Route>
    </Switch>
  );
}

export {App};
export default connect(null)(App);
