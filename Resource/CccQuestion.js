var util = require('util');
var Question = require('./Question');

(function() {
    'use strict';
    
    var CccQuestion = function() {
        Question.apply(this, arguments);
    };
    module.exports = CccQuestion;
    util.inherits(CccQuestion, Question);
    var proto = CccQuestion.prototype;
    
    proto.types = [
        'CccQuestion',
        'Question'
    ];

    proto.label = null;
    proto.responseType = null;
    proto.choices = null;
}) ();
