(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var Link = require('react-router').Link;
    var AuthorApi = require('../../api/authorApi');
    var AuthorList = require('./authorList');

    var AuthorPage = React.createClass({
        getInitialState: function() {
            return {
                authors: []
            };
        },

        componentDidMount: function() {
            if (this.isMounted()) {
                this.setState({ authors: AuthorApi.getAllAuthors() });
            }
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
