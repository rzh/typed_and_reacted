/// <reference path='../typings/tsd.d.ts' />

import React = require('react');

var Button = React.createClass({

  render() {
    return React.DOM.button({onClick: this.onClick}, 'Typed Button!');
  },

  componentDidMount() {
    console.log('buttonDidMount');
  },

  onClick(e) {
    alert('Works!');
  }
});

export = Button;

