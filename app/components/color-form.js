import Ember from 'ember';
import Color from 'color-palette/models/color';

const { inject, computed } = Ember;

export default Ember.Component.extend({
  classNames: ['color-form'],

  colors: inject.service(),

  init() {
    this._super(arguments);

    this.set('color', Color.create());
  },

  isValidName: computed('color.name', function() {
    return this.get('color.name').trim().length > 0;
  }),

  isInvalidName: computed.not('isValidName'),

  isValidColor: computed('color.code', function() {
    let color = this.get('color.code');
    let regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;

    return regex.test(color);
  }),

  isInvalidColor: computed.not('isValidColor'),

  isValid: computed('isValidColor', 'isValidName', function() {
    return this.get('isValidColor') && this.get('isValidName');
  }),

  actions: {
    add(color) {
      let style = this.get('isDark')? 'dark': 'light';
      color.set('style', style);
      this.get('colors').add(color);
      this.set('color', Color.create());
    }
  }
});
