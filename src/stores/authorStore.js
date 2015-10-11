(function() {
    'use strict';

    var Dispatcher = require('../dispatcher/appDispatcher');
    var ActionTypes = require('../constants/actionTypes');
    // Nodejs event emitter
    // Used to broadcast events from stores so that react components are notified when stores change
    var EventEmitter = require('events').EventEmitter;
    // Need to extend store to become event emitter
    // Object assign combines two objects into one with keys/values of both
    var assign = require('object-assign');
    var _ = require('lodash');
    var CHANGE_EVENT = 'change';

    // Private variables
    var _authors = [];

    // Public API
    // Take empty new object, extend it to utilise EventEmitter.prototype, then define rest of store
    // Kind of like extending EventEmitter.prototype
    // Can you do the same thing without first argument?
    var AuthorStore = assign({}, EventEmitter.prototype, {
        // Store needs to way for provide react components to interact with store
        // Required 3 functions
        addChangeListener: function(callback) {
            this.on(CHANGE_EVENT, callback);
        },

        removeChangeListener: function(callback) {
            this.removeListener(CHANGE_EVENT, callback);
        },

        emitChange: function() {
            this.emit(CHANGE_EVENT);
        },

        getAllAuthors: function() {
            return _authors;
        },

        getAuthorById: function(id) {
            return _.find(_authors, { id: id });
        }
    });

    // Register store with dispatcher (private implementation detail, not exposed by public API)
    Dispatcher.register(function(action) {
        // Called every time any action is dispatched
        // Every store registered with dispatcher is notified of every single action
        switch(action.actionType) {
            case ActionTypes.INITIALIZE:
                _authors = action.initialData.authors;
                AuthorStore.emitChange();
                break;
            case ActionTypes.CREATE_AUTHOR:
                _authors.push(action.author);
                // Anytime store changes, emitChange should be called so that any react components
                // that have registered with the store will be notified and know to update UI
                AuthorStore.emitChange();
                break;
            case ActionTypes.UPDATE_AUTHOR:
                // Replace existing author with new author
                var existingAuthor = _.find(_authors, { id: action.author.id });
                var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
                _authors.splice(existingAuthorIndex, 1, action.author);
                AuthorStore.emitChange();
                break;
            case ActionTypes.DELETE_AUTHOR:
                _.remove(_authors, function(author) {
                    return action.id === author.id;
                });
                AuthorStore.emitChange();
                break;
        }
    });

    module.exports = AuthorStore;
})();
