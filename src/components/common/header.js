(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var Link = Router.Link;

    var Header = React.createClass({
        render: function() {
            return (
                <nav className="navbar">
                    <div>
                        <Link to="app" className="logo">
                            <img src="http://placehold.it/150x150" />
                        </Link>
                        <ul className="navigation">
                            <li><Link to="app">Home</Link></li>
                            <li><Link to="authors">Authors</Link></li>
                            <li><Link to="about">About</Link></li>
                        </ul>
                    </div>
                </nav>
            );
        }
    })

    module.exports = Header;
})();
