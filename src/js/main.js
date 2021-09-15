import modals from './modules/modal';
import sliders from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInput';
import showMoreStyles from './modules/showMoreStyles'
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize'
import accordion from './modules/accordion'

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let calcState = {};


  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms(calcState);
  mask('[name="phone"]');
  checkTextInputs('[name="name"]')
  checkTextInputs('[name="message"]')
  showMoreStyles('.button-styles', '#styles .row')
  calc('#size', '#material', '#options', '.promocode', '.calc-price', calcState)
  filter()
  pictureSize('.sizes-block')
  accordion('.accordion-heading')
});