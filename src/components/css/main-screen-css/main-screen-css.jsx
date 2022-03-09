import React, {useState} from 'react';
import DocumentMeta from 'react-document-meta';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import BasicCss from '../basic-css/basic-css';
import Selectors from '../selectors/selectors';
import ToTopButton from '../../to-top-button/to-top-button';
import Grid from '../grid/grid';
import Gradient from '../gradient/gradient';
import BackgroundsAndFrames from '../backgrounds-and-frames/backgrounds-and-frames';
import Animations from '../animations/animations';
import TwoDimensionalTransfomations from '../two-dimensional-transformations/two-dimensional-transformations';
import CSSFilters from '../css-filters/css-filters';
import CSSTable from '../css-table/css-table';
import Flexbox from '../flexbox/flexbox';
import FlexboxMarkupAlgorithm from '../flexbox/flexbox-markup-algorithm';
import MethodsForConstructingGridsOnFlexboxes from '../flexbox/methods-for-constructing-grids-on-flexboxes';
import Shadows from '../shadows/shadows';
import Fonts from '../fonts/fonts';
import Text from '../text/text';
import LayoutText from '../text/layout-text';
import Typography from '../text/typography';
import InheritanceAndCascading from '../inheritance-and-cascading/inheritance-and-cascading';
import FlowGridsLayout from '../flow-grids-layout/flow-grids-layout';
import BuildingSiteLayout from '../building-site-layout/building-site-layout';
import GridsAndMicrogrids from '../flow-grids-layout/grids-and-microgrids';
import Positioning from '../positioning/positioning';
import CustomProperties from '../custom-properties/custom-properties';
import Less from '../less/less';
import StylingCheckboxAndRadio from '../styling-form/styling-checkbox-and-radio';
import StylingSelect from '../styling-form/styling-select';
import Terms from '../work-with-site-layout/terms';
import GetDataFromPhotoshop from '../work-with-site-layout/get-data-from-photoshop';
import GetDataFromFigma from '../work-with-site-layout/get-data-from-figma';
import AdaptiveLayout from '../adaptive-layout/adaptive-layout';
import MediaQueries from '../adaptive-layout/media-queries';

function MainAboutCSS() {
  const meta = {
    title: 'About CSS',
  };

  const [state, setState] = useState({
    activeItem: {
      ['basic-css']: true,
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
          <h1>По красоте чтобы...</h1>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['basic-css']: true}})}
              >Основы CSS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['selectors']: true}})}
              >Селекторы в CSS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['flow-grids-layout']: true}})}
              >Flow, grids and layout
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['grids-and-microgrids']: true}})}
                  >Grids and Microgrids
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['positioning']: true}})}
                  >Positioning
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['building-site-layout']: true}})}
                  >Building a site layout
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['adaptive-layout']: true}})}
                  >Adaptive Layout
                  </Link>
                  <ul>
                    <li>
                      <Link to="#"
                        onClick={() => setState({activeItem: {['media-queries']: true}})}
                      >Media queries
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['grid']: true}})}
              >Grid
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['flexbox']: true}})}
              >Flexbox
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['flex-markup-algorithm']: true}})}
                  >Flex layout algorithm
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['methods-for-constructing-grids-on-flexboxes']: true}})}
                  >Methods for constructing grids on flexboxes
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['fonts']: true}})}
              >Fonts
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['text']: true}})}
              >Text
              </Link>
              <ul>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['layout-text']: true}})}
                  >Layout of text content of pages
                  </Link>
                </li>
                <li>
                  <Link to="#"
                    onClick={() => setState({activeItem: {['typography']: true}})}
                  >Typography
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['gradient']: true}})}
              >Gradient
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['bg-and-frames']: true}})}
              >Backgrounds and Frames
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['animations']: true}})}
              >Animations in CSS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['2d-transformations']: true}})}
              >2D Transformations in CSS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['css-filters']: true}})}
              >CSS Filters
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['css-table']: true}})}
              >CSS Table
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['shadows']: true}})}
              >Shadows
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['inheritance-and-cascading']: true}})}
              >Inheritance and Cascading в CSS
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['custom-properties']: true}})}
              >Custom properties
              </Link>
            </li>
          </ul>
          <h4>
            <Link to="#"
              onClick={() => setState({activeItem: {['less']: true}})}
            >Less
            </Link>
          </h4>
          <h3>Работа с макетом</h3>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['terms']: true}})}
              >Terms
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['photoshop']: true}})}
              >Get data from Photoshop
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['figma']: true}})}
              >Get data from Figma
              </Link>
            </li>
          </ul>
          <h3>Styling Forms</h3>
          <ul>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['styling-checkbox-and-radio']: true}})}
              >Styling Checkbox and Radio
              </Link>
            </li>
            <li>
              <Link to="#"
                onClick={() => setState({activeItem: {['styling-select']: true}})}
              >Styling Select
              </Link>
            </li>
          </ul>
          <h2>Articles about CSS</h2>
          <ul>
            <li><a href="https://doka.guide/css/attr/" target="_blank" rel="noopener noreferrer">CSS-функция attr()</a></li>
            <li><a href="https://htmlacademy.ru/blog/boost/frontend/about-normalize-css" target="_blank" rel="noopener noreferrer">О normalize.css</a></li>
            <li><a href="https://habr.com/ru/post/280125/" target="_blank" rel="noopener noreferrer">REM vs EM – Великий спор</a></li>
            <li><a href="https://medium.com/devschacht/david-gilbertson-rems-and-ems-and-why-you-probably-dont-need-them-3b2b1e785787" target="_blank" rel="noopener noreferrer">Ремы, емы, и почему отказ от них — не проблема</a></li>
            <li><a href="https://css-live.ru/css/nikto-ne-znaet-css-specifichnost-ne-kaskad.html" target="_blank" rel="noopener noreferrer">Никто не знает CSS: специфичность — не каскад</a></li>
            <li><a href="https://www.w3.org/Style/CSS/current-work.en.html" target="_blank" rel="noopener noreferrer">CSS current work &amp; how to participate</a></li>
            <li><a href="https://web-standards.ru/articles/css-architecture/#section-1" target="_blank" rel="noopener noreferrer">ПРИНЦИПЫ ХОРОШЕЙ АРХИТЕКТУРЫ CSS</a></li>
          </ul>
        </div>
        <div className="theory">
          {(state.activeItem['basic-css']) && <BasicCss />}
          {(state.activeItem['selectors']) && <Selectors />}
          {(state.activeItem['grid']) && <Grid />}
          {(state.activeItem['flow-grids-layout']) && <FlowGridsLayout />}
          {(state.activeItem['grids-and-microgrids']) && <GridsAndMicrogrids />}
          {(state.activeItem['positioning']) && <Positioning />}
          {(state.activeItem['building-site-layout']) && <BuildingSiteLayout />}
          {(state.activeItem['gradient']) && <Gradient />}
          {(state.activeItem['bg-and-frames']) && <BackgroundsAndFrames />}
          {(state.activeItem['animations']) && <Animations />}
          {(state.activeItem['2d-transformations']) && <TwoDimensionalTransfomations />}
          {(state.activeItem['css-filters']) && <CSSFilters />}
          {(state.activeItem['css-table']) && <CSSTable />}
          {(state.activeItem['flexbox']) && <Flexbox />}
          {(state.activeItem['flex-markup-algorithm']) && <FlexboxMarkupAlgorithm />}
          {(state.activeItem['methods-for-constructing-grids-on-flexboxes']) && <MethodsForConstructingGridsOnFlexboxes />}
          {(state.activeItem['shadows']) && <Shadows />}
          {(state.activeItem['fonts']) && <Fonts />}
          {(state.activeItem['typography']) && <Typography />}
          {(state.activeItem['text']) && <Text />}
          {(state.activeItem['layout-text']) && <LayoutText />}
          {(state.activeItem['inheritance-and-cascading']) && <InheritanceAndCascading />}
          {(state.activeItem['custom-properties']) && <CustomProperties />}
          {(state.activeItem['less']) && <Less />}
          {(state.activeItem['terms']) && <Terms />}
          {(state.activeItem['photoshop']) && <GetDataFromPhotoshop />}
          {(state.activeItem['figma']) && <GetDataFromFigma />}
          {(state.activeItem['styling-checkbox-and-radio']) && <StylingCheckboxAndRadio />}
          {(state.activeItem['styling-select']) && <StylingSelect />}
          {(state.activeItem['adaptive-layout']) && <AdaptiveLayout />}
          {(state.activeItem['media-queries']) && <MediaQueries />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
