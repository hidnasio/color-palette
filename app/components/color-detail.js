import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['color-detail'],
  classNameBindings: ['isDark:color-detail--dark:color-detail--light'],
  attributeBindings: ['style'],

  isDark: computed('color.style', function() {
    return this.get('color.style') === 'dark';
  }),

  style: computed('color.code', function() {
    return Ember.String.htmlSafe(`background-color:${this.get('color.code')}`);
  }),

  click() {
    this.get('back')();
  }
}).reopenClass({
  positionalParams: ['color']
});
