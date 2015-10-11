(function() {
    'use strict';

    var Dispatcher = require('../dispatcher/appDispatcher');
    var AuthorApi = require('../api/authorApi');
    var ActionTypes = require('../constants/actionTypes');

    var AuthorActions = {
        createAuthor: function(author) {
            // Usually api is asynchronous so would be using callbacks/promises to handle response
            var newAuthor = AuthorApi.saveAuthor(author);

            // Dispatcher tells all the stores that an author was just created
            Dispatcher.dispatch({
                // Action goes here
                // Each action has two core properties:
                // actionType and data
                actionType: ActionTypes.CREATE_AUTHOR,
                author: newAuthor
            });
        },

        updateAuthor: function(author) {
            var updatedAuthor = AuthorApi.saveAuthor(author);

            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_AUTHOR,
                author: updatedAuthor
            });
        },

        deleteAuthor: function(id) {
            AuthorApi.deleteAuthor(id);

            // If this was asynchronous, can have a separate DELETE_AUTHOR action
            //      Show a loader etc.
            // Once that action completed, fire AUTHOR_DELETED action
            //      Hide loader, show final confirmation etc.
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_AUTHOR,
                id: id
            });


        }
    };

    module.exports = AuthorActions;
})();



