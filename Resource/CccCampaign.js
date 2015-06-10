var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var CccCampaign = function() {
        Resource.apply(this, arguments);
    };
    module.exports = CccCampaign;
    util.inherits(CccCampaign, Resource);
    var proto = CccCampaign.prototype;
    
    proto.types = [
        'CccCampaign'
    ];

    proto.id = null;
    proto.name = null;
    proto.status = null;
    proto.created = null;
    proto.lastModified = null;
    proto.localRestrictBegin = null;
    proto.localRestrictEnd = null;
    proto.configUpdated = null;
    proto.script = null;
    proto.fromNumber = null;
    proto.retryConfig = null;
    proto.agentGroupId = null;
    proto.agentGroupName = null;
    proto.smartDropSoundId = null;
    proto.smartDropSoundRef = null;
    proto.allowAnyTransfer = null;
    proto.recorded = null;
    proto.scrubLevel = null;
    proto.questions = [];
    proto.transferNumbers = [];
}) ();
