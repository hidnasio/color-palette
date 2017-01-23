import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    viewColor(color) {
      let slug = color.toLowerCase();
      this.transitionToRoute('color', slug);
    }
  }
});
