var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var RetryPhoneTypes = function() {
        Resource.apply(this, arguments);
    };
    module.exports = RetryPhoneTypes;
    util.inherits(RetryPhoneTypes, Resource);
    var proto = RetryPhoneTypes.prototype;
    
    proto.types = [
        'RetryPhoneTypes'
    ];

}) ();
