'use strict';

///////////////////////////////////////

const header = document.querySelector('.header');
const toScrollBtn = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');
const navLinksContainer = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

const operationTabContainer = document.querySelector(
  '.operations__tab-container'
);
const operationsTab = document.querySelectorAll('.operations__tab');

const contentTab = document.querySelectorAll('.operations__content');

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//COOKIE MESSAGE

const message = document.createElement('div');
message.innerHTML =
  '<p> we use cookies for better user experience </p> <button class = "btn btn-close-cookie">Got It!</button>';
message.classList.add('cookie-message');
header.append(message);

const closecookie = document.querySelector('.btn-close-cookie');
closecookie.addEventListener('click', function () {
  message.remove();
});

// Smooth Scroll

toScrollBtn.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

//PAGE NAVIGATION
navLinksContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;
  if (
    target.classList.contains('nav__link') &&
    !target.classList.contains('nav__link--btn')
  ) {
    const id = target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//TABBED Component

operationTabContainer.addEventListener('click', function (e) {
  const click = e.target.closest('.operations__tab');
  if (!click) return;

  const tab = click.dataset.tab;

  operationsTab.forEach(el => el.classList.remove('operations__tab--active'));
  document
    .querySelector(`.operations__tab--${tab}`)
    .classList.add('operations__tab--active');

  contentTab.forEach(el => el.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${tab}`)
    .classList.add('operations__content--active');
});

//Making nav sticky on scrolling

const navHeight = nav.getBoundingClientRect().height;
const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
headerObserver.observe(header);

//reveal sections

const sections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};
const revealOptions = {
  root: null,
  threshold: 0.15,
};
const sectionObserver = new IntersectionObserver(revealSection, revealOptions);

sections.forEach(function (sec) {
  sec.classList.add('section--hidden');
  sectionObserver.observe(sec);
});

//Lazy loading images

const images = document.querySelectorAll('img[data-src]');

const lazyLoadFun = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const lazyOptions = {
  root: null,
  threshold: 0,
  rootMargin: '250px',
};
const lazyLoader = new IntersectionObserver(lazyLoadFun, lazyOptions);

images.forEach(image => lazyLoader.observe(image));

//slide component
const slideNext = document.querySelector('.slider__btn--right');
const slidePrev = document.querySelector('.slider__btn--left');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let noOfSlides = slides.length;
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});
const gotoSlide = function (currentSlide) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
};

const nextSlide = function () {
  if (currentSlide === noOfSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
    console.log('slide');
  }
  gotoSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = noOfSlides - 1;
  } else {
    currentSlide--;
  }
  gotoSlide(currentSlide);
};

slideNext.addEventListener('click', nextSlide);
slidePrev.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});
