/// <reference path='../typings/tsd.d.ts' />

import React = require('react');

var AsyncComponent = React.createClass({

  render() {
    return React.DOM.div({}, 'I AM ASYNC!');
  }
});

export = AsyncComponent;

