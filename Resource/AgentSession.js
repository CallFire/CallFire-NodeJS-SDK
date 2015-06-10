var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var AgentSession = function() {
        Resource.apply(this, arguments);
    };
    module.exports = AgentSession;
    util.inherits(AgentSession, Resource);
    var proto = AgentSession.prototype;
    
    proto.types = [
        'AgentSession'
    ];

    proto.id = null;
    proto.agentId = null;
    proto.campaignId = null;
    proto.agentState = null;
    proto.callCount = null;
    proto.start = null;
    proto.lastUpdate = null;
}) ();
