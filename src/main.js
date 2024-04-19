import { initalizeCover } from './js/covers';
initalizeCover();

import { changeTheSubject } from './js/header-change-of-subject';
changeTheSubject();

//#region HEADER
import { initializeMenuBehavior } from './js/header-logic';
initializeMenuBehavior();
//#endregion HEADER

//#region REVIEWS
import { fetchDataAndInitializeSwiper } from './js/reviews';

async function initializeSwiper() {
  await fetchDataAndInitializeSwiper();
}

initializeSwiper();
//#endregion REVIEWS

<<<<<<< Updated upstream
import * as workTogether from './js/work-together';

//#region MOBILE
import { initializeMobile } from './js/mobile-logic';

initializeMobile();
//#endregion MOBILE

//#region backToTop
import { backToTop } from './js/back-to-top.js';
backToTop();

initializeMobile();
//#endregion backToTop
=======
// #region about-me
import { aboutMeFunction } from './js/about-me.js';
aboutMeFunction();
// #endregion about-me
>>>>>>> Stashed changes
