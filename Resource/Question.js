var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Question = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Question;
    util.inherits(Question, Resource);
    var proto = Question.prototype;
    
    proto.types = [
        'Question'
    ];

    proto.label = null;
    proto.responseType = null;
    proto.choices = null;
}) ();
