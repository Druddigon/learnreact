(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var routes = require('./routes');

    // Add in Router.HistoryLocation to use HTML5 history location style (uses push state to change URLs)
    Router.run(routes, Router.HistoryLocation, function(Handler) {
        React.render(<Handler/>, document.getElementById('app'));
    });
})();

