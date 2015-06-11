var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var CccCampaignStats = function() {
        Resource.apply(this, arguments);
    };
    module.exports = CccCampaignStats;
    util.inherits(CccCampaignStats, Resource);
    var proto = CccCampaignStats.prototype;
    
    proto.types = [
        'CccCampaignStats'
    ];

    proto.agentCount = null;
    proto.activeAgentCount = null;
    proto.callsAttempted = null;
    proto.callsPlaced = null;
    proto.callsDuration = null;
    proto.billedDuration = null;
    proto.billedAmount = null;
    proto.callsRemaining = null;
    proto.callsAwaitingRedial = null;
    proto.callsLiveAnswer = null;
    proto.responseRatePercent = null;
    proto.resultStats = [];
}) ();
