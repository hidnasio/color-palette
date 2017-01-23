import Ember from 'ember';

const { computed, inject } = Ember;

export default Ember.Component.extend({
  classNames: ['color-item'],
  classNameBindings: ['isDark:color-item--dark:color-item--light'],
  attributeBindings: ['style'],
  showControls: false,

  colors: inject.service(),

  isDark: computed('item.style', function() {
    return this.get('item.style') === 'dark';
  }),

  style: computed('item', function() {
    let color = this.get('item.code');

    return Ember.String.htmlSafe(`background: ${color}`);
  }),

  click() {
    this.toggleProperty('showControls');
  },

  actions: {
    delete() {
      this.get('colors').delete(this.get('item'));
    },

    view() {
      this.get('viewColor')(this.get('item').name);
    }
  }
}).reopenClass({
  positionalParams: ['item']
});
