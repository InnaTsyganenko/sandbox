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
import CssCounter from '../css-counter/css-counter';
import { ContentsCss } from '../../../const';
import { changeCurrentPage } from '../../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage } from '../../../store/user/selectors';

function MainAboutCSS() {
  const dispatch = useDispatch();
  const currentPage = useSelector(getCurrentPage);

  const [title, setTitle] = useState(currentPage === '' ? ContentsCss[0].name : ContentsCss.find((element) => element.state === currentPage).name);
  const [state, setState] = useState(currentPage === '' ? ContentsCss[0].state : currentPage);

  const meta = {
    title: title,
  };

  const setStateFunction = (name, key) => {
    setTitle(name);
    setState(key);
    dispatch(changeCurrentPage(key));
  };

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
          {ContentsCss.length > 0 && (
            <ul>
              {ContentsCss.map((content) => (
                <li className="" id="" key={content.state}>
                  <Link
                    className=""
                    onClick={() => setStateFunction(content.name, content.state)}
                    to="#"
                  >{content.name}
                  </Link>
                </li>))}
            </ul>
          )}

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
          {(state === 'basic-css') && <BasicCss />}
          {(state === 'selectors') && <Selectors />}
          {(state === 'grid') && <Grid />}
          {(state === 'flow-grids-layout') && <FlowGridsLayout />}
          {(state === 'grids-and-microgrids') && <GridsAndMicrogrids />}
          {(state === 'positioning') && <Positioning />}
          {(state === 'building-site-layout') && <BuildingSiteLayout />}
          {(state === 'gradient') && <Gradient />}
          {(state === 'bg-and-frames') && <BackgroundsAndFrames />}
          {(state === 'animations') && <Animations />}
          {(state === '2d-transformations') && <TwoDimensionalTransfomations />}
          {(state === 'css-filters') && <CSSFilters />}
          {(state === 'css-table') && <CSSTable />}
          {(state === 'flexbox') && <Flexbox />}
          {(state === 'flex-markup-algorithm') && <FlexboxMarkupAlgorithm />}
          {(state === 'methods-for-constructing-grids-on-flexboxes') && <MethodsForConstructingGridsOnFlexboxes />}
          {(state === 'shadows') && <Shadows />}
          {(state === 'fonts') && <Fonts />}
          {(state === 'typography') && <Typography />}
          {(state === 'text') && <Text />}
          {(state === 'layout-text') && <LayoutText />}
          {(state === 'inheritance-and-cascading') && <InheritanceAndCascading />}
          {(state === 'custom-properties') && <CustomProperties />}
          {(state === 'less') && <Less />}
          {(state === 'terms') && <Terms />}
          {(state === 'photoshop') && <GetDataFromPhotoshop />}
          {(state === 'figma') && <GetDataFromFigma />}
          {(state === 'styling-checkbox-and-radio') && <StylingCheckboxAndRadio />}
          {(state === 'styling-select') && <StylingSelect />}
          {(state === 'adaptive-layout') && <AdaptiveLayout />}
          {(state === 'media-queries') && <MediaQueries />}
          {(state === 'css-counter') && <CssCounter />}
        </div>
        {scrollState && <ToTopButton scrollState={scrollState} setScrollState={setScrollState} />}
      </main>
    </DocumentMeta>
  );
}
export default MainAboutCSS;
