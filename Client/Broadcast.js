var Client = require('../Client'),
    util = require('util');

(function() {
    'use strict';
    
    var Broadcast = function() {
        Client.apply(this, arguments);
    };
    module.exports = Broadcast;
    util.inherits(Broadcast, Client);
    var proto = Broadcast.prototype;

    proto.CreateBroadcast = function(CreateBroadcast, callback) {
        var uri = this.get_uri('/broadcast');
        return this.post(uri, CreateBroadcast, callback);
    };

    proto.QueryBroadcasts = function(QueryBroadcasts, callback) {
        var uri = this.get_uri('/broadcast');
        return this.get(uri, QueryBroadcasts, callback);
    };

    proto.GetBroadcast = function(Id, callback) {
        var uri = this.get_uri('/broadcast/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.GetBroadcastStats = function(Id, GetBroadcastStats, callback) {
        var uri = this.get_uri('/broadcast/%s/stats', Id);
        return this.get(uri, GetBroadcastStats, callback);
    };

    proto.ControlBroadcast = function(Id, ControlBroadcast, callback) {
        var uri = this.get_uri('/broadcast/%s/control', Id);
        return this.put(uri, ControlBroadcast, callback);
    };

    proto.CreateContactBatch = function(BroadcastId, CreateContactBatch, callback) {
        var uri = this.get_uri('/broadcast/%s/batch', BroadcastId);
        return this.post(uri, CreateContactBatch, callback);
    };

    proto.QueryContactBatches = function(BroadcastId, QueryContactBatches, callback) {
        var uri = this.get_uri('/broadcast/%s/batch', BroadcastId);
        return this.get(uri, QueryContactBatches, callback);
    };

    proto.GetContactBatch = function(Id, callback) {
        var uri = this.get_uri('/broadcast/batch/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.ControlContactBatch = function(Id, ControlContactBatch, callback) {
        var uri = this.get_uri('/broadcast/batch/%s/control', Id);
        return this.put(uri, ControlContactBatch, callback);
    };

    proto.CreateBroadcastSchedule = function(BroadcastId, CreateBroadcastSchedule, callback) {
        var uri = this.get_uri('/broadcast/%s/schedule', BroadcastId);
        return this.post(uri, CreateBroadcastSchedule, callback);
    };

    proto.QueryBroadcastSchedule = function(BroadcastId, QueryBroadcastSchedule, callback) {
        var uri = this.get_uri('/broadcast/%s/schedule', BroadcastId);
        return this.get(uri, QueryBroadcastSchedule, callback);
    };

    proto.GetBroadcastSchedule = function(Id, callback) {
        var uri = this.get_uri('/broadcast/schedule/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.DeleteBroadcastSchedule = function(Id, callback) {
        var uri = this.get_uri('/broadcast/schedule/%s', Id);
        return this.delete(uri, {}, callback);
    };

    proto.UpdateBroadcast = function(id, UpdateBroadcast, callback) {
        var uri = this.get_uri('/broadcast/%s', id);
        return this.put(uri, UpdateBroadcast, callback);
    };

}) ();
