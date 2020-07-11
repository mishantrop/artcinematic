// import { LuminousGallery } from 'luminous-lightbox';
import { scrollTo } from './scrollto';
import Quasiform from 'quasiform';

// import { initBackToTopScroll } from './backtotop';
import { initYandexMap } from './yandexMap';
// import { Modal } from './Modal';
// import { Navigation } from './navigation';
// import { initSuperButton } from './superbutton';

// const initLazyBackgrouns = () => {
//   const attributeName = 'data-lazy-background';
//   const lazyBackgroundsBlocks = document.querySelectorAll(`[${attributeName}]`);
//   lazyBackgroundsBlocks.forEach((element) => {
//     element.style.backgroundImage = `url('${element.getAttribute(attributeName)}')`;
//   });
// };

// const initModal = (name) => {
//   const modal = new Modal(name, (modalName) => {
//     const form = document.querySelector(`.${modalName}__form`);
//     const errors = document.querySelector(`.${modalName}-errors`);
//     const messages = document.querySelector(`.${modalName}-messages`);
//     if (form) {
//       form.style.display = 'block';
//       errors.style.display = 'none';
//       messages.style.display = 'none';
//     }
//   });
//   const form = new Quasiform({
//     hideFormOnSuccess: true,
//     selector: `#${name}__form-wrapper`,
//   });
//   const triggers = document.querySelectorAll(`[data-trigger="${name}"]`);
//   if (triggers.length > 0) {
//     triggers.forEach((trigger) => {
//       trigger.addEventListener('click', () => {
//         modal.show();
//       });
//     });
//   }
// };

// const initModals = () => {
//   initModal('recall');
//   initModal('reservation', true);
// };

// const initIndexGalleryLightbox = () => {
//   const options = {
//     arrowNavigation: true,
//   };
//   const gallery = new LuminousGallery(document.querySelectorAll('[data-lightbox="index-gallery-item"]'), options);
// };

const init = () => {
  console.log('%c Создание пиздатых сайтов — quasi-art.ru', 'background-color: #000; color: #fff;');

  const pageLinks = document.querySelectorAll('[data-scrollto]');

  [].forEach.call(pageLinks, (el) => {
    el.addEventListener('click', (e) => {
      const target = document.querySelector(el.getAttribute('data-scrollto'));
      if (target) {
        scrollTo(target, 500);
        e.preventDefault();
      }
    });
  });

  // const navigation = new Navigation();
  // initBackToTopScroll();
  // initIndexGallerySlider();
  // initIndexGalleryMobileSlider();
  // initIndexTeamSlider();
  // initIndexTestimonialsSlider();
  // initIndexReservationSlider();

  if (document.querySelectorAll('#index-feedback__form-wrapper')) {
    const feedbackForm = new Quasiform({
      selector: '#index-feedback__form-wrapper',
    });
  }

  // initSuperButton();
  // initIndexGalleryLightbox();

  // initLazyBackgrouns();
  initYandexMap('index-map');
  // initModals();
};

if (document.readyState === 'complete' || document.readyState !== 'loading') {
  console.log('developed by quasi-art.ru');
  init();
} else {
  document.addEventListener('DOMContentLoaded', init);
}
