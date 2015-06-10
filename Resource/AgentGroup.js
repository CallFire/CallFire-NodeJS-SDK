var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var AgentGroup = function() {
        Resource.apply(this, arguments);
    };
    module.exports = AgentGroup;
    util.inherits(AgentGroup, Resource);
    var proto = AgentGroup.prototype;
    
    proto.types = [
        'AgentGroup'
    ];

    proto.id = null;
    proto.name = null;
    proto.campaignIds = null;
    proto.agentIds = null;
    proto.agentEmails = null;
}) ();
