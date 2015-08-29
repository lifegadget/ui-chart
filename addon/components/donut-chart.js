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
  api: ['width', 'height', 'color'],
  width: computed('responsive.viewport.width',{
    get() {
      return this.$().width();
    },
    set(_,value) {
      return value;
    }
  }),
  height: computed('responsive.viewport.height',function() {
      return this.$().height();
  }),
  color: computed(function() {
      return d3.scale.category20();
  }),

  // NON-API VARIABLES
  radius: computed('width','height', function() {
    const {width,height} = this.getProperties('width', 'height');
    return Math.min(width, height) / 2;
  }),
  pie() {
    return d3.layout.pie()
        .value(function(d) { return d.count; })
        .sort(null)
  },
  arc() {
    const {radius} = this.getProperties('radius');
    return d3.svg.arc().innerRadius(radius - 100).outerRadius(radius - 20);
  },
  // svg: d3.select("body").append("svg")
  //     .attr("width", width)
  //     .attr("height", height)
  //   .append("g")
  //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // var path = svg.selectAll("path");



  enter() {

  },
  update() {

  },
  exit() {

  },

});
