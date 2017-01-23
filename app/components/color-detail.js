import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'article',
  classNames: ['color-detail'],
  attributeBindings: ['style'],

  style: computed('color.code', function() {
    return `background-color:${this.get('color.code')}`;
  }),

  click() {
    this.get('back')();
  }
}).reopenClass({
  positionalParams: ['color']
});;
