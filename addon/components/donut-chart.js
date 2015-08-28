import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const {computed, observer, $, A, run, on, typeOf, debug, defineProperty, get, set, inject, isEmpty} = Ember;  // jshint ignore:line
import layout from '../templates/components/donut-chart';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'svg',
  classNames: ['ui-chart', 'donut-chart'],
  responsive: inject.service(),
  // API SURFACE
  api: ['width', 'height'],
  width: computed('responsive.viewport',{
    get() {
      return this.$().width();
    },
    set(_,value) {
      return value;
    }
  }),
  height: computed('responsive.viewport',{
    get() {
      return this.$().height();
    },
    set(_,value) {
      return value;
    }
  }),


  enter() {

  },
  update() {

  },
  exit() {

  }
});
