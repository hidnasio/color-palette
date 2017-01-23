import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  colors: inject.service(),

  model(args) {
    return this.get('colors').findByName(args.slug);
  }
});
