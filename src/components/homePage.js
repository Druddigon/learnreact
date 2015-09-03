(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var Link = Router.Link;

    var Home = React.createClass({
        // whatever render returns is displayed to screen
        // JSX uses className because class is reserved
        render: function() {
            return (
                <div className="hero">
                    <h1>Header</h1>
                    <p>Using React, React Router and Flux.</p>
                    <Link to="about">Learn more</Link>
                </div>
            );
        }
    });

    module.exports = Home;
})();

