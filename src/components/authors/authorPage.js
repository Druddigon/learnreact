(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var Link = require('react-router').Link;
    var AuthorActions = require('../../actions/authorActions');
    var AuthorStore = require('../../stores/authorStore');
    var AuthorList = require('./authorList');

    var AuthorPage = React.createClass({
        getInitialState: function() {
            return {
                authors: AuthorStore.getAllAuthors()
            };
        },

        componentDidMount: function() {

        },

        render: function() {
            // React needs 1 top level component (e.g. wrap in div if there's >1
            return (
                <div>
                    <h1>Authors</h1>
                    <Link to="addAuthor">Add Author</Link>
                    <AuthorList authors={ this.state.authors } />
                </div>
            );
        }
    });

    module.exports = AuthorPage;
})();
