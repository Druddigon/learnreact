(function() {
    'use strict';

    var React = require('react');

    var Header = React.createClass({
        render: function() {
            return (
                <nav className="navbar">
                    <div>
                        <a href="/" className="logo">
                            <img src="http://placehold.it/150x150" />
                        </a>
                        <ul className="navigation">
                            <li><a href="/">Home</a></li>
                            <li><a href="/#authors">Authors</a></li>
                            <li><a href="/#about">About</a></li>
                        </ul>
                    </div>
                </nav>
            );
        }
    })

    module.exports = Header;
})();
