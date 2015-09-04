(function() {
    'use strict';

    var React = require('react');

    var Router = require('react-router');
    var DefaultRoute = Router.DefaultRoute;
    var Route = Router.Route;
    var NotFoundRoute = Router.NotFoundRoute;
    var Redirect = Router.Redirect;

    // If path is undefined then name is assumed to be the path
    var routes = (
        <Route name="app" path="/" handler={ require('./components/app') }>
            <DefaultRoute handler={ require('./components/homePage') } />
            <Route name="authors" handler={ require('./components/authors/authorPage') } />
            <Route name="addAuthor" path="author" handler={ require('./components/authors/manageAuthorPage') } />
            <Route name="about" handler={ require('./components/about/aboutPage') } />
            <NotFoundRoute handler={ require('./components/notFoundPage') } />
            <Redirect from="about-us" to="about" />
            <Redirect from="about/*" to="about" />
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

    REDIRECTS:
    Alias Redirect:
    var Redirect = Router.Redirect;
    Create a new route:
    <Redirect from="old-path" to="name-of-new-path" />

    URLS:
    Hash location styles, e.g. localhost:9005/#/authors - better supported
    HTML5 history style, e.g. localhost:9005/authors - supports isomorphic JS, cleaner
        Have to configure server to support clean URLs, direct all requests to client side index page
    */

    module.exports = routes;
})();
