var Client = require('../Client'),
    util = require('util');

(function() {
    'use strict';
    
    var Contact = function() {
        Client.apply(this, arguments);
    };
    module.exports = Contact;
    util.inherits(Contact, Client);
    var proto = Contact.prototype;

    proto.QueryContacts = function(QueryContacts, callback) {
        var uri = this.get_uri('/contact');
        return this.get(uri, QueryContacts, callback);
    };

    proto.UpdateContacts = function(UpdateContacts, callback) {
        var uri = this.get_uri('/contact');
        return this.put(uri, UpdateContacts, callback);
    };

    proto.RemoveContacts = function(RemoveContacts, callback) {
        var uri = this.get_uri('/contact');
        return this.delete(uri, RemoveContacts, callback);
    };

    proto.GetContact = function(Id, callback) {
        var uri = this.get_uri('/contact/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.GetContactHistory = function(ContactId, GetContactHistory, callback) {
        var uri = this.get_uri('/contact/%s/history', ContactId);
        return this.get(uri, GetContactHistory, callback);
    };

    proto.CreateContactList = function(CreateContactList, callback) {
        var uri = this.get_uri('/contact/list');
        return this.post(uri, CreateContactList, callback);
    };

    proto.QueryContactLists = function(QueryContactLists, callback) {
        var uri = this.get_uri('/contact/list');
        return this.get(uri, QueryContactLists, callback);
    };

    proto.DeleteContactList = function(Id, callback) {
        var uri = this.get_uri('/contact/list/%s', Id);
        return this.delete(uri, {}, callback);
    };

    proto.AddContactsToList = function(ContactListId, AddContactsToList, callback) {
        var uri = this.get_uri('/contact/list/%s/add', ContactListId);
        return this.post(uri, AddContactsToList, callback);
    };

    proto.GetContactList = function(Id, callback) {
        var uri = this.get_uri('/contact/list/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.RemoveContactsFromList = function(ContactListId, RemoveContactsFromList, callback) {
        var uri = this.get_uri('/contact/list/%s/remove', ContactListId);
        return this.post(uri, RemoveContactsFromList, callback);
    };

    proto.QueryDncNumbers = function(QueryDncNumbers, callback) {
        var uri = this.get_uri('/contact/dnc');
        return this.get(uri, QueryDncNumbers, callback);
    };

    proto.UpdateDncNumber = function(Number, UpdateDncNumber, callback) {
        var uri = this.get_uri('/contact/dnc/%s', Number);
        return this.put(uri, UpdateDncNumber, callback);
    };

    proto.QueryDncLists = function(QueryDncLists, callback) {
        var uri = this.get_uri('/contact/dnc/list');
        return this.get(uri, QueryDncLists, callback);
    };

    proto.CreateDncList = function(CreateDncList, callback) {
        var uri = this.get_uri('/contact/dnc/list');
        return this.post(uri, CreateDncList, callback);
    };

    proto.GetDncList = function(Id, callback) {
        var uri = this.get_uri('/contact/dnc/list/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.DeleteDncList = function(Id, callback) {
        var uri = this.get_uri('/contact/dnc/list/%s', Id);
        return this.delete(uri, {}, callback);
    };

    proto.AddNumbersToDncList = function(Id, AddNumbersToDncList, callback) {
        var uri = this.get_uri('/contact/dnc/list/%s/add', Id);
        return this.post(uri, AddNumbersToDncList, callback);
    };

    proto.RemoveNumbersFromDncList = function(Id, RemoveNumbersFromDncList, callback) {
        var uri = this.get_uri('/contact/dnc/list/%s/remove', Id);
        return this.post(uri, RemoveNumbersFromDncList, callback);
    };

}) ();
