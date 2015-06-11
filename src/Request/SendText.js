(function() {
    'use strict';
    
    var SendText = function() {
        
    };
    module.exports = SendText;
    var proto = SendText.prototype;

    proto.requestId = null;

    proto.type = null;

    proto.broadcastName = null;

    proto.to = null;

    proto.toNumber = null;

    proto.scrubBroadcastDuplicates = null;

    proto.created = null;

    proto.from = null;

    proto.localRestrictBegin = null;

    proto.localRestrictEnd = null;

    proto.maxAttempts = null;

    proto.minutesBetweenAttempts = null;

    proto.retryResults = null;

    proto.retryPhoneTypes = null;

    proto.message = null;

    proto.bigMessageStrategy = null;

    proto.broadcastId = null;

    proto.useDefaultBroadcast = null;

}) ();
