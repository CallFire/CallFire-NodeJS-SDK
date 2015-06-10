var util = require('util');
var BroadcastConfig = require('./BroadcastConfig');

(function() {
    'use strict';
    
    var CccBroadcastConfig = function() {
        BroadcastConfig.apply(this, arguments);
    };
    module.exports = CccBroadcastConfig;
    util.inherits(CccBroadcastConfig, BroadcastConfig);
    var proto = CccBroadcastConfig.prototype;
    
    proto.types = [
        'CccBroadcastConfig',
        'BroadcastConfig'
    ];

    proto.agentGroupId = null;
    proto.smartDropSoundId = null;
    proto.scriptId = null;
    proto.transferNumberIdList = null;
    proto.allowAnyTransfer = null;
    proto.recorded = null;
    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}) ();
