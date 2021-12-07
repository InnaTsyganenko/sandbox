import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../../header/header';
import GitAndGitHub from '../git-and-github/git-and-github';
import Vscode from '../vscode/vscode';
import Emmet from '../emmet/emmet';
import ThreeKeySoftwarePrinciples from '../three-key-software-principles/three-key-software-principles';
import DevtoolsChrome from '../devtools-chrome/devtools-chrome';
import SiteChecklist from '../site-checklist/site-checklist';
import HowToWebsitePublication from '../how-to/how-to-website-publication';
import ToTopButton from '../../to-top-button/to-top-button';
import ToDoScheduling from '../to-do-scheduling/to-do-scheduling';
import HowToInsertTheRubleSign from '../how-to/how-to-insert-the-ruble-sign';
import HowToPushTheFooterDown from '../how-to/how-to-push-the-footer-down';
import HowToCenterElement from '../how-to/how-to-center-element';
import HowToSetTextHighlightColor from '../how-to/how-to-set-text-highlight-color';
import HowToStyleTagAbbr from '../how-to/how-to-style-tag-abbr';
import HowToMakeCustomCheckboxesCorrectly from '../how-to/how-to-make-custom-checkboxes-correctly';
import HowToMakeDarkTheme from '../how-to/how-to-make-dark-theme';
import PatternAdapter from '../pattern-adapter/pattern-adapter';
import WorldWideWeb from '../world-wide-web/world-wide-web';
import HowToHide from '../how-to/how-to-hide';
import Markdown from '../markdown/markdown';
import ProgressiveEnhancement from '../progressive-enhancement/progressive-enhancement';
import Accessibility from '../accessibility/accessibility';
import NodeNpmBundlers from '../node-npm-bundlers/node-npm-bundlers';
import Gulp from '../gulp/gulp';
import Bem from '../bem/bem';

function MainAboutOther() {
  const meta = {
    title: 'All Sorts of Things',
  };

  const [state, setState] = useState({
    activeItem: {
      ['how-to-set-text-highlight-color']: true,
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
          <h1>Всякое-разное</h1>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['site-checklist']: true}})}
              >Site Checklist
              </Link>
              <ul>
                <li><a href="https://isqua.ru/blog/2016/06/19/crash-test-viorstki/" target="_blank" rel="noopener noreferrer">Краш-тест вёрстки</a></li>
                <li><a href="https://isqua.ru/blog/2016/05/30/kak-popast-v-makiet-i-nie-soiti-s-uma/" target="_blank" rel="noopener noreferrer">Как попасть в макет и не сойти с ума</a></li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['node-npm-bundlers']: true}})}
              >Node.js, npm, сборщики модулей
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['git-and-github']: true}})}
              >GitHub and git
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['gulp']: true}})}
              >Gulp
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['bem']: true}})}
              >БЭМ (Блок, Элемент, Модификатор)
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['to-do-scheduling']: true}})}
              >Как делать дела
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['three-key-software-principles']: true}})}
              >Three Key Software Principles
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['pattern-adapter']: true}})}
              >Pattern Adapter
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['world-wide-web']: true}})}
              >The World Wide Web, API and other...
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['markdown']: true}})}
              >Markdown
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['progressive-enhancement']: true}})}
              >Метод прогрессивного улучшения
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['accessibility']: true}})}
              >Accessibility
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['devtools-chrome']: true}})}
              >Devtools Chrome
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['vscode']: true}})}
              >VSCode
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['emmet']: true}})}
              >Шпаргалка по Emmet
              </Link>
            </li>
          </ul>
          <h4>How To</h4>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-make-custom-checkboxes-correctly']: true}})}
              >Кастомные чекбоксы правильно
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-website-publication']: true}})}
              >How To Publish a Website
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-insert-the-ruble-sign']: true}})}
              >How To Insert the Ruble Sign
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-push-the-footer-down']: true}})}
              >How to Push the Footer Down
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-center-element']: true}})}
              >How to Center Element
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-set-text-highlight-color']: true}})}
              >How to Set Text Highlight Color
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-style-tag-abbr']: true}})}
              >How to Style Tag <code>&lt;abbr&gt;</code>
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-hide']: true}})}
              >How to Hide
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['how-to-make-dark-theme']: true}})}
              >How to make dark theme
              </Link>
            </li>
          </ul>
          <h4>Crafts</h4>
          <ul>
            <li><a href="crafts/marker-on-the-map/index.html" target="_blank" rel="noopener noreferrer">Marker on the Map</a></li>
            <li><a href="crafts/spinner/index.html" target="_blank" rel="noopener noreferrer">Beautyful Spinner</a></li>
            <li><a href="crafts/slider/index.html" target="_blank" rel="noopener noreferrer">Slider</a></li>
          </ul>
        </div>
        <div className="theory">
          {(state.activeItem['git-and-github']) && <GitAndGitHub />}
          {(state.activeItem['vscode']) && <Vscode />}
          {(state.activeItem['emmet']) && <Emmet />}
          {(state.activeItem['three-key-software-principles']) && <ThreeKeySoftwarePrinciples />}
          {(state.activeItem['devtools-chrome']) && <DevtoolsChrome />}
          {(state.activeItem['site-checklist']) && <SiteChecklist />}
          {(state.activeItem['to-do-scheduling']) && <ToDoScheduling />}
          {(state.activeItem['pattern-adapter']) && <PatternAdapter />}
          {(state.activeItem['how-to-insert-the-ruble-sign']) && <HowToInsertTheRubleSign />}
          {(state.activeItem['how-to-website-publication']) && <HowToWebsitePublication />}
          {(state.activeItem['how-to-push-the-footer-down']) && <HowToPushTheFooterDown />}
          {(state.activeItem['how-to-center-element']) && <HowToCenterElement />}
          {(state.activeItem['how-to-set-text-highlight-color']) && <HowToSetTextHighlightColor />}
          {(state.activeItem['how-to-style-tag-abbr']) && <HowToStyleTagAbbr />}
          {(state.activeItem['how-to-make-custom-checkboxes-correctly']) && <HowToMakeCustomCheckboxesCorrectly />}
          {(state.activeItem['world-wide-web']) && <WorldWideWeb />}
          {(state.activeItem['how-to-hide']) && <HowToHide />}
          {(state.activeItem['markdown']) && <Markdown />}
          {(state.activeItem['how-to-make-dark-theme']) && <HowToMakeDarkTheme />}
          {(state.activeItem['progressive-enhancement']) && <ProgressiveEnhancement />}
          {(state.activeItem['accessibility']) && <Accessibility />}
          {(state.activeItem['node-npm-bundlers']) && <NodeNpmBundlers />}
          {(state.activeItem['gulp']) && <Gulp />}
          {(state.activeItem['bem']) && <Bem />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutOther;
