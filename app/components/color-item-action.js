import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['color-item-action'],

  click(event) {
    event.stopPropagation();
    this.get('action')(this);
  }

}).reopenClass({
  positionalParams: ['icon', 'action']
});;
