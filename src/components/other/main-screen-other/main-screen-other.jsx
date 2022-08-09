import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
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
import HowToSetupEslint from '../how-to/how-to-setup-eslint';
import PatternAdapter from '../pattern-adapter/pattern-adapter';
import WorldWideWeb from '../www-and-networking/world-wide-web';
import Networking from '../www-and-networking/networking';
import HowToHide from '../how-to/how-to-hide';
import Markdown from '../markdown/markdown';
import ProgressiveEnhancement from '../progressive-enhancement/progressive-enhancement';
import Accessibility from '../accessibility/accessibility';
import NodeNpmBundlers from '../node-npm-bundlers/node-npm-bundlers';
import Gulp from '../gulp/gulp';
import Bem from '../bem/bem';
import { ItemsMenuHowToOtherScreen, ItemsMenuOtherScreen } from '../../../const';

function MainAboutOther() {
  const meta = {
    title: 'All Sorts of Things',
  };

  const [state, setState] = useState({
    activeItem: {
      [ItemsMenuOtherScreen[0].state]: true,
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
            {ItemsMenuOtherScreen.map((item) => (
              <li key={item.state}>
                <Link to="#"
                  onClick={() => setState({activeItem: {[item.state]: true}})}
                >{item.title}
                </Link>
              </li>
            ))}
          </ul>

          <h4>How To</h4>
          <ul>{ItemsMenuHowToOtherScreen.map((item) => (
            <li key={item.state}>
              <Link to="#"
                onClick={() => setState({activeItem: {[item.state]: true}})}
              >{item.title}
              </Link>
            </li>
          ))}
          </ul>
          <h4>Crafts</h4>
          <ul>
            <li><a href="examples/marker-on-the-map/index.html" target="_blank" rel="noopener noreferrer">Marker on the Map</a></li>
            <li><a href="examples/spinner/index.html" target="_blank" rel="noopener noreferrer">Beautyful Spinner</a></li>
            <li><a href="examples/slider/index.html" target="_blank" rel="noopener noreferrer">Slider</a></li>
            <li><a href="examples/jellyfish/index.html" target="_blank" rel="noopener noreferrer">Beautyful jellyfish</a></li>
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
          {(state.activeItem['networking']) && <Networking />}
          {(state.activeItem['how-to-hide']) && <HowToHide />}
          {(state.activeItem['markdown']) && <Markdown />}
          {(state.activeItem['how-to-make-dark-theme']) && <HowToMakeDarkTheme />}
          {(state.activeItem['how-to-setup-eslint']) && <HowToSetupEslint />}
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
