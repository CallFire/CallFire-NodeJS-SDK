var util = require('util');
var Resource = require('../Resource');

var ContactList = function() {
    Resource.apply(this, arguments);
}
util.inherits(ContactList, Resource);
with({proto: ContactList.prototype}) {
    proto.types = [
        'ContactList'
    ]

    proto.id = null;
    proto.name = null;
    proto.size = null;
    proto.created = null;
}

module.exports = ContactList;
