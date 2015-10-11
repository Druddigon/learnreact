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
    var CHANGE_EVENT = 'change';

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
        }
    });


})();
