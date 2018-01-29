import Component from '@ember/component';
import {get} from '@ember/object';

export default Component.extend({
  buttonLabel: 'Save',

  actions: {
    buttonClicked(param) {
      get(this, 'action')(param)
    }
  }
});