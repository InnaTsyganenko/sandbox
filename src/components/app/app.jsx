import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import MainScreenProjectsAndCrafts from '../projects-and-crafts/main-screen-projects-and-crafts/main-screen-projects-and-crafts';
import MainScreenScratchpad from '../scratchpad/main-screen-scratchpad/main-screen-scratchpad';
import MainAboutHTML from '../scratchpad/html/main-screen-html/main-screen-html';
import MainAboutCSS from '../scratchpad/css/main-screen-css/main-screen-css';
import MainAboutReact from '../scratchpad/react/main-screen-react/main-screen-react';
import MainAboutJS from '../scratchpad/javascript/main-screen-js/main-screen-js';
import MainAboutPHP from '../scratchpad/php/main-screen-php/main-screen-php';
import MainAboutOther from '../scratchpad/other/main-screen-other/main-screen-other';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(props) {

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <MainScreen />
      </Route>
      <Route exact path={AppRoute.PROJECTS_AND_CRAFTS}>
        <MainScreenProjectsAndCrafts />
      </Route>
      <Route exact path={AppRoute.SCRATCHPAD}>
        <MainScreenScratchpad />
      </Route>
      <Route exact path={`${AppRoute.PROJECTS_AND_CRAFTS}${AppRoute.PROJECTS}`}>
        <MainScreenProjectsAndCrafts />
      </Route>
      <Route exact path={`${AppRoute.PROJECTS_AND_CRAFTS}${AppRoute.CRAFTS}`}>
        <MainScreenProjectsAndCrafts />
      </Route>
      <Route exact path={`${AppRoute.SCRATCHPAD}${AppRoute.HTML}`}>
        <MainAboutHTML />
      </Route>
      <Route exact path={`${AppRoute.SCRATCHPAD}${AppRoute.CSS}`}>
        <MainAboutCSS />
      </Route>
      <Route exact path={`${AppRoute.SCRATCHPAD}${AppRoute.JS}`}>
        <MainAboutJS />
      </Route>
      <Route exact path={`${AppRoute.SCRATCHPAD}${AppRoute.REACT}`}>
        <MainAboutReact />
      </Route>
      <Route exact path={`${AppRoute.SCRATCHPAD}${AppRoute.PHP}`}>
        <MainAboutPHP />
      </Route>
      <Route exact path={`${AppRoute.SCRATCHPAD}${AppRoute.OTHER}`}>
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
