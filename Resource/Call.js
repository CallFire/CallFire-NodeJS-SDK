var util = require('util');
var Action = require('./Action');

var Call = function() {
    Action.apply(this, arguments);
}
util.inherits(Call, Action);
with({proto: Call.prototype}) {
    proto.types = [
        'Call',
        'Action'
    ]

    proto.callRecords = null;
    proto.id = null;
    proto.fromNumber = null;
    proto.toNumber = null;
    proto.state = null;
    proto.batchId = null;
    proto.broadcastId = null;
    proto.contactId = null;
    proto.inbound = null;
    proto.created = null;
    proto.modified = null;
    proto.finalResult = null;
}

module.exports = Call;
