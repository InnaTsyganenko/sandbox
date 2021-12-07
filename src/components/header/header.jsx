import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import ThemeSwitch from '../theme-switch/theme-switch';

function Header() {

  return (
    <header className="page__header">
      <nav className="main-navigation">
        <ul className="main-navigation__list">
          <li className="main-navigation__item">
            <Link
              to={AppRoute.ROOT}
              className="main-navigation__link"
              aria-label="Ссылка на главную"
            >home
            </Link>
          </li>
          <li className="main-navigation__item">
            <Link
              to={AppRoute.PROJECTS_AND_CRAFTS}
              className="main-navigation__link"
              aria-label="Ссылка на страницу с проектами"
            >projects & crafts
            </Link>
          </li>
          <li className="main-navigation__item">
            <Link
              to={AppRoute.SCRATCHPAD}
              className="main-navigation__link"
              aria-label="Ссылка на конспекты"
            >scratchpad
            </Link>
          </li>
        </ul>
      </nav>
      <div className="theme-switch__container">
        <ThemeSwitch />
      </div>
    </header>
  );
}
export default Header;
