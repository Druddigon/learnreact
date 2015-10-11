(function() {
    'use strict';

    var React = require('react');
    var Router = require('react-router');
    var Link = Router.Link;
    var AuthorActions = require('../../actions/authorActions');
    var toastr = require('toastr');

    var AuthorList = React.createClass({
        // Validate props (only in development)
        propTypes: {
            authors: React.PropTypes.array.isRequired
        },

        // Could be defined in parent component and passed down to authorList
        // By defining here, makes it easy to use if authorList used in other places
        // as long as deleteAuthor logic doesn't change
        deleteAuthor: function(id, event) {
            event.preventDefault();
            AuthorActions.deleteAuthor(id);
            toastr.success('Author Deleted');
        },

        render: function() {
            var createAuthorRow = function(author) {
                return (
                    <tr key={ author.id }>
                        <td><Link to="manageAuthor" params={ { id: author.id } }>{ author.id }</Link></td>
                        <td>{ author.firstName } { author.lastName }</td>
                        <td><a href="#" onClick={ this.deleteAuthor.bind(this, author.id) }>Delete</a></td>
                    </tr>
                );
            };
            return (
                <div>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th></th>
                        </thead>
                        <tbody>
                            { this.props.authors.map(createAuthorRow, this) }
                        </tbody>
                    </table>
                </div>
            );
        }
    });

    module.exports = AuthorList;
})();
