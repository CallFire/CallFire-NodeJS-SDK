var util = require('util');
var Resource = require('../Resource');

var ActionRecord = function() {
    Resource.apply(this, arguments);
}
util.inherits(ActionRecord, Resource);
with({proto: ActionRecord.prototype}) {
    proto.types = [
        'ActionRecord'
    ]

    proto.id = null;
    proto.result = null;
    proto.finishTime = null;
    proto.billedAmount = null;
    proto.questionResponses = null;
}

module.exports = ActionRecord;
