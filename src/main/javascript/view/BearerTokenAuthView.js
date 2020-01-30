'use strict';

SwaggerUi.Views.BasicAuthView = Backbone.View.extend({

    initialize: function (opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    events: {
        'change .auth_input': 'inputChange'
    },

    selectors: {
        accessKeyInput: '.bearer_token_auth__accessKey',
        secretKeyInput: '.bearer_token_auth__secretKey'
    },

    cls: {
        error: 'error'
    },

    template: Handlebars.templates.bearer_token_auth,

    render: function(){
        $(this.el).html(this.template(this.model.toJSON()));

        return this;
    },

    inputChange: function (e) {
        var $el = $(e.target);
        var val = $el.val();
        var attr = $el.prop('name');

        if (val) {
            $el.removeClass(this.cls.error);
        }

        this.model.set(attr, val);
    },

    isValid: function () {
        return this.model.validate();
    },

    highlightInvalid: function () {
        if (!this.model.get('accessKey')) {
            this.$(this.selectors.accessKeyInput).addClass(this.cls.error);
        }
        if (!this.model.get('secretKey')) {
            this.$(this.selectors.secretKeyInput).addClass(this.cls.error);
        }
    }
});
