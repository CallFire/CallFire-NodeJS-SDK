var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var CccScript = function() {
        Resource.apply(this, arguments);
    };
    module.exports = CccScript;
    util.inherits(CccScript, Resource);
    var proto = CccScript.prototype;
    
    proto.types = [
        'CccScript'
    ];

    proto.id = null;
    proto.content = null;
    proto.question = null;
}) ();
