import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  colors: inject.service(),

  model() {
    return this.get('colors').all();
  }
});
