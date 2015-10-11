(function() {
    'use strict';

    // Key gets copied to value side
    var keyMirror = require('react/lib/keyMirror');

    module.exports = keyMirror({
        INITIALIZE: null,
        CREATE_AUTHOR: null,
        UPDATE_AUTHOR: null,
        DELETE_AUTHOR: null
    });
})();
