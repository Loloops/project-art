import modals from './modules/modal';
import sliders from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInput';
import showMoreStyles from './modules/showMoreStyles'

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]')
  checkTextInputs('[name="message"]')
  showMoreStyles('.button-styles', '#styles .row')
});