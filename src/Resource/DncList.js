var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var DncList = function() {
        Resource.apply(this, arguments);
    };
    module.exports = DncList;
    util.inherits(DncList, Resource);
    var proto = DncList.prototype;
    
    proto.types = [
        'DncList'
    ];

    proto.id = null;
    proto.campaignId = null;
    proto.name = null;
    proto.size = null;
}) ();
