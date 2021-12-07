import React from 'react';
import Header from '../../header/header';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

function MainScreenCrafts() {
  const meta = {
    title: 'Crafts',
  };

  return (
    <DocumentMeta {...meta}>
      <Header />
      <main className="page__main-page-projects-and-crafts">
        <nav className="main-nav-projects-and-crafts">
          <ul className="main-nav-projects-and-crafts__list">
            <li className="main-nav-projects-and-crafts__item">
              <Link className="main-nav-projects-and-crafts__link" to={`${AppRoute.PROJECTS_AND_CRAFTS}${AppRoute.PROJECTS}`}>
                PROJECTS
              </Link>
            </li>
            <li className="main-nav-projects-and-crafts__item">
              <Link className="main-nav-projects-and-crafts__link" to={`${AppRoute.PROJECTS_AND_CRAFTS}${AppRoute.CRAFTS}`}>
                CRAFTS
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </DocumentMeta>
  );
}
export default MainScreenCrafts;
