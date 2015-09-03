(function() {
    'use strict';

    var React = require('react');

    var Router = require('react-router');
    var DefaultRoute = Router.DefaultRoute;
    var Route = Router.Route;

    // If path is undefined then name is assumed to be the path
    var routes = (
        <Route name="app" path="/" handler={ require('./components/app') }>
            <DefaultRoute handler={ require('./components/homePage') } />
            <Route name="authors" handler={ require('./components/authors/authorPage') } />
            <Route name="about" handler={ require('./components/about/aboutPage') } />
        </Route>
    );

    /*
     Given a route like this:
     <route path="/course/:courseId" handler={ Course } />

     and a URL like this:
     '/course/clean-code?module=3'

     The component's props will be populated
     var Course = React.createClass({
        render: function() {
            this.props.params.courseId; // "clean-code"
            this.props.query.module; // "3"
            this.props.path; // "/course/clean-code/?module=3"
            // ...
        }
     });

     LINKS:
     URL: /user/1
     Route: <route name="user" path="/user/:userId" />
     JSX: <Link to="user" params={{userId: 1}}>Bobby Tables</Link> // references route by name
        Compiles to: <a href="/user/1">Bobby Tables</a>

    */

    module.exports = routes;
})();
