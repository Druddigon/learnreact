(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var routes = require('./routes');
    var InitializeActions = require('./actions/initializeActions');

    InitializeActions.initApp();

    // Add in Router.HistoryLocation to use HTML5 history location style (uses push state to change URLs)
    Router.run(routes, function(Handler) {
        React.render(<Handler/>, document.getElementById('app'));
    });
})();

