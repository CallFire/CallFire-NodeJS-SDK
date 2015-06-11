var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Callback = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Callback;
    util.inherits(Callback, Resource);
    var proto = Callback.prototype;
    
    proto.types = [
        'Callback'
    ];

    proto.id = null;
    proto.userId = null;
    proto.outboundCallId = null;
    proto.notificationSent = null;
}) ();
