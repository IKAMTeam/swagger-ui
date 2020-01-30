'use strict';

SwaggerUi.Models.BearerTokenAuthModel = Backbone.Model.extend({
    defaults: {
        accessKey: '',
        secretKey: '',
        title: 'bearer_token'
    },

    initialize: function () {
        this.on('change', this.validate);
    },

    validate: function () {
        var valid = !!this.get('accessKey') && !!this.get('secretKey');

        this.set('valid', valid);

        return valid;
    }
});
