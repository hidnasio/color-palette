import Ember from 'ember';

const { inject } = Ember;

const colors = [
  Ember.Object.create({
    name: 'RED',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#f34235',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'PINK',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#e81d62',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'PURPLE',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#9b26af',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'DEEP PURPLE',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#6639b6',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'INDIGO',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#3e50b4',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'BLUE',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#2095f2',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'LIGTH BLUE',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#02a8f3',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'CYAN',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#00bbd3',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'TEAL',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#009587',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'GREEN',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#4bae4f',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'LIGHT GREEN',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#8ac249',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'LIME',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#ccdb38',
    style: 'dark'
  }),
  Ember.Object.create({
    name: 'YELLOW',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#feea3a',
    style: 'dark'
  }),
  Ember.Object.create({
    name: 'AMBER',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#fec006',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'ORANGE',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#fe9700',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'DEEP ORANGE',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#fe5621',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'BROWN',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#785447',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'GREY',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#9d9d9d',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'BLUE GREY',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#5f7c8a',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'DARK GREY',
    icon: 'tick',
    description: 'Lorem ipsum dolor',
    code: '#555555',
    style: 'light'
  })
];

export default Ember.Service.extend({
  colors: null,

  init() {
    this._super(...arguments);
    this.set('colors', colors);
  },

  all() {
    return this.get('colors');
  },

  add(color) {
    console.log(color);
    this.get('colors').pushObject(color);
  },

  delete(color) {
    this.get('colors').removeObject(color);
  },

  findByName(name) {
    return this.get('colors').find((color) => name.toUpperCase() === color.name.toUpperCase());
  }
});
