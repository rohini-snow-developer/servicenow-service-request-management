var ServiceRequestUtils = Class.create();

ServiceRequestUtils.prototype = {

    initialize: function() {
    },

    getRequestCount: function(userId) {

        var request = new GlideRecord('sc_request');

        request.addQuery('requested_for', userId);
        request.query();

        return request.getRowCount();
    },

    getActiveRequestCount: function(userId) {

        var request = new GlideRecord('sc_request');

        request.addQuery('requested_for', userId);
        request.addQuery('active', true);
        request.query();

        return request.getRowCount();
    },

    type: 'ServiceRequestUtils'
};
