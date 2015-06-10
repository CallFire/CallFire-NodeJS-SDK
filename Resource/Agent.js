var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Agent = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Agent;
    util.inherits(Agent, Resource);
    var proto = Agent.prototype;
    
    proto.types = [
        'Agent'
    ];

    proto.id = null;
    proto.enabled = null;
    proto.name = null;
    proto.email = null;
    proto.lastLogin = null;
    proto.campaignIds = null;
    proto.groupIds = null;
    proto.activeSessionId = null;
}) ();
