import Ember from 'ember';

const colors = [
  Ember.Object.create({
    name: 'RED',
    icon: 'tick',
    description: 'In a tagteam match, RED was teamed with Hulk Hogan against King Kong Bundy and Andre The Giant. He pinned all 3 at the same time.',
    code: '#f34235',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'PINK',
    icon: 'tick',
    description: 'PINK doesn\'t play god. Playing is for children.',
    code: '#e81d62',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'PURPLE',
    icon: 'tick',
    description: 'MacGyver can build an airplane out of gum and paper clips. PURPLE can kill him and take it.',
    code: '#9b26af',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'DEEP PURPLE',
    icon: 'tick',
    description: 'DEEP PURPLE doesn\'t chew gum. DEEP PURPLE chews tin foil.',
    code: '#6639b6',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'INDIGO',
    icon: 'tick',
    description: 'INDIGO burst the dot com bubble.',
    code: '#3e50b4',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'BLUE',
    icon: 'tick',
    description: 'The Drummer for Def Leppard\'s only got one arm. BLUE needed a back scratcher.',
    code: '#2095f2',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'LIGTH BLUE',
    icon: 'tick',
    description: 'As an infant, LIGTH BLUE\' parents gave him a toy hammer. He gave the world Stonehenge.',
    code: '#02a8f3',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'CYAN',
    icon: 'tick',
    description: 'CYAN  can win a game of Connect Four in only three moves.',
    code: '#00bbd3',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'TEAL',
    icon: 'tick',
    description: 'TEAL can lead a horse to water AND make it drink.',
    code: '#009587',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'GREEN',
    icon: 'tick',
    description: 'Whiteboards are white because GREEN scared them that way.',
    code: '#4bae4f',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'LIGHT GREEN',
    icon: 'tick',
    description: 'The quickest way to a man\'s heart is with LIGHT GREEN\' fist.',
    code: '#8ac249',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'LIME',
    icon: 'tick',
    description: 'LIME can solve the Towers of Hanoi in one move.',
    code: '#ccdb38',
    style: 'dark'
  }),
  Ember.Object.create({
    name: 'YELLOW',
    icon: 'tick',
    description: 'The only pattern YELLOW knows is God Object.',
    code: '#feea3a',
    style: 'dark'
  }),
  Ember.Object.create({
    name: 'AMBER',
    icon: 'tick',
    description: 'AMBER proved that we are alone in the universe. We weren\'t before his first space expedition.',
    code: '#fec006',
    style: 'dark'
  }),
  Ember.Object.create({
    name: 'ORANGE',
    icon: 'tick',
    description: 'ORANGE can touch MC Hammer.',
    code: '#fe9700',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'DEEP ORANGE',
    icon: 'tick',
    description: 'After taking a steroids test doctors informed DEEP ORANGE that he had tested positive. He laughed upon receiving this information, and said "of course my urine tested positive, what do you think they make steroids from?"',
    code: '#fe5621',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'BROWN',
    icon: 'tick',
    description: 'Bill Gates thinks he\'s BROWN. BROWN actually laughed. Once.',
    code: '#785447',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'GREY',
    icon: 'tick',
    description: 'GREY does infinit loops in 4 seconds.',
    code: '#9d9d9d',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'BLUE GREY',
    icon: 'tick',
    description: 'When BLUE GREY is in a crowded area, he doesn\'t walk around people. He walks through them.',
    code: '#5f7c8a',
    style: 'light'
  }),
  Ember.Object.create({
    name: 'DARK GREY',
    icon: 'tick',
    description: 'DARK GREY has never been in a fight, ever. Do you call one roundhouse kick to the face a fight?',
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
    this.get('colors').pushObject(color);
  },

  delete(color) {
    this.get('colors').removeObject(color);
  },

  findByName(name) {
    return this.get('colors').find((color) => name.toUpperCase() === color.name.toUpperCase());
  }
});
