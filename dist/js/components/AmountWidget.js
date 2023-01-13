import {settings, select} from '../settings.js';
import BaseWidget from './BaseWidget.js';

class AmountWidget extends BaseWidget{ 
    constructor(element){
      super (element, settings.amountWidget.defaultValue);

      const thisWidget = this; 

      thisWidget.getElements(element);
 
      thisWidget.initActions();
    }
    getElements(element){
      const thisWidget = this;
      
      thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input);
      thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
      thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
    }
    initActions() {
      const thisWidget = this;

      thisWidget.dom.input.addEventListener('change', function(e) {
        e.preventDefault();
        thisWidget.setValue(e.target.value);
      });

      thisWidget.dom.linkIncrease.addEventListener('click', function(e) {
        e.preventDefault();
        thisWidget.setValue(thisWidget.value + 1);
      });

      thisWidget.dom.linkDecrease.addEventListener('click', function(e) {
        e.preventDefault();
        thisWidget.setValue(thisWidget.value - 1);
      });
    }
   
    isValid(value){
      return !isNaN(value) 
      && value >= settings.amountWidget.defaultMin 
      && value <= settings.amountWidget.defaultMax;
    }
    renderValue(){
      const thisWidget = this; 
      thisWidget.dom.input.value = thisWidget.value; 
    }
  }
  export default AmountWidget;