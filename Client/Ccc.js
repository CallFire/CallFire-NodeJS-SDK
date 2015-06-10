var Client = require('../Client'),
    util = require('util');

(function() {
    'use strict';
    
    var Ccc = function() {
        Client.apply(this, arguments);
    };
    module.exports = Ccc;
    util.inherits(Ccc, Client);
    var proto = Ccc.prototype;

    proto.GetCccCampaign = function(Id, callback) {
        var uri = this.get_uri('/ccc/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.CreateCccCampaign = function(CreateCccCampaign, callback) {
        var uri = this.get_uri('/ccc');
        return this.post(uri, CreateCccCampaign, callback);
    };

    proto.QueryCccCampaigns = function(QueryCccCampaigns, callback) {
        var uri = this.get_uri('/ccc');
        return this.get(uri, QueryCccCampaigns, callback);
    };

    proto.DeleteCccCampaignTransferNumbers = function(Id, callback) {
        var uri = this.get_uri('/ccc/%s/transfer-numbers', Id);
        return this.delete(uri, {}, callback);
    };

    proto.DeleteCccCampaignQuestions = function(Id, callback) {
        var uri = this.get_uri('/ccc/%s/questions', Id);
        return this.delete(uri, {}, callback);
    };

    proto.ControlCccCampaign = function(Id, ControlCccCampaign, callback) {
        var uri = this.get_uri('/ccc/%s/control', Id);
        return this.put(uri, ControlCccCampaign, callback);
    };

    proto.DeleteCccCampaign = function(Id, callback) {
        var uri = this.get_uri('/ccc/%s', Id);
        return this.delete(uri, {}, callback);
    };

    proto.GetAgent = function(Id, callback) {
        var uri = this.get_uri('/ccc/agent/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.QueryAgents = function(QueryAgents, callback) {
        var uri = this.get_uri('/ccc/agent');
        return this.get(uri, QueryAgents, callback);
    };

    proto.GetAgentGroup = function(Id, callback) {
        var uri = this.get_uri('/ccc/agent-group/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.QueryAgentGroups = function(QueryAgentGroups, callback) {
        var uri = this.get_uri('/ccc/agent-group');
        return this.get(uri, QueryAgentGroups, callback);
    };

    proto.CreateAgentGroup = function(CreateAgentGroup, callback) {
        var uri = this.get_uri('/ccc/agent-group');
        return this.post(uri, CreateAgentGroup, callback);
    };

    proto.DeleteAgentGroup = function(Id, callback) {
        var uri = this.get_uri('/ccc/agent-group/%s', Id);
        return this.delete(uri, {}, callback);
    };

    proto.GetAgentSession = function(Id, callback) {
        var uri = this.get_uri('/ccc/agent-session/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.QueryAgentSessions = function(QueryAgentSessions, callback) {
        var uri = this.get_uri('/ccc/agent-session');
        return this.get(uri, QueryAgentSessions, callback);
    };

    proto.SendAgentInvites = function(CampaignId, SendAgentInvites, callback) {
        var uri = this.get_uri('/ccc/%s/agent-invite', CampaignId);
        return this.post(uri, SendAgentInvites, callback);
    };

    proto.GetAgentInviteUri = function(CampaignId, GetAgentInviteUri, callback) {
        var uri = this.get_uri('/ccc/%s/agent-invite-uri', CampaignId);
        return this.get(uri, GetAgentInviteUri, callback);
    };

    proto.GetCccCampaignStats = function(CampaignId, GetCccCampaignStats, callback) {
        var uri = this.get_uri('/ccc/%s/stats', CampaignId);
        return this.get(uri, GetCccCampaignStats, callback);
    };

    proto.UpdateCccCampaign = function(Id, UpdateCccCampaign, callback) {
        var uri = this.get_uri('/ccc/%s', Id);
        return this.put(uri, UpdateCccCampaign, callback);
    };

    proto.AddAgents = function(CampaignId, AddAgents, callback) {
        var uri = this.get_uri('/ccc/%s/agent', CampaignId);
        return this.post(uri, AddAgents, callback);
    };

    proto.GetAgents = function(CampaignId, GetAgents, callback) {
        var uri = this.get_uri('/ccc/%s/agent', CampaignId);
        return this.get(uri, GetAgents, callback);
    };

    proto.RemoveAgent = function(CampaignId, Id, RemoveAgent, callback) {
        var uri = this.get_uri('/ccc/%s/agent/%s', CampaignId, Id);
        return this.delete(uri, RemoveAgent, callback);
    };

    proto.UpdateAgentGroup = function(Id, UpdateAgentGroup, callback) {
        var uri = this.get_uri('/ccc/agent-group/%s', Id);
        return this.put(uri, UpdateAgentGroup, callback);
    };

    proto.AddAgentGroups = function(CampaignId, AddAgentGroups, callback) {
        var uri = this.get_uri('/ccc/%s/agent-group', CampaignId);
        return this.post(uri, AddAgentGroups, callback);
    };

    proto.GetAgentGroups = function(CampaignId, GetAgentGroups, callback) {
        var uri = this.get_uri('/ccc/%s/agent-group', CampaignId);
        return this.get(uri, GetAgentGroups, callback);
    };

    proto.RemoveAgentGroup = function(CampaignId, Id, RemoveAgentGroup, callback) {
        var uri = this.get_uri('/ccc/%s/agent-group/%s', CampaignId, Id);
        return this.delete(uri, RemoveAgentGroup, callback);
    };

}) ();
