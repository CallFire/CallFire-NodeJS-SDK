var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var DncNumber = function() {
        Resource.apply(this, arguments);
    };
    module.exports = DncNumber;
    util.inherits(DncNumber, Resource);
    var proto = DncNumber.prototype;
    
    proto.types = [
        'DncNumber'
    ];

    proto.number = null;
    proto.dncListId = null;
    proto.callDnc = null;
    proto.textDnc = null;
}) ();
