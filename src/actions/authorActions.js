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
        }
    };

    module.exports = AuthorActions;
})();



