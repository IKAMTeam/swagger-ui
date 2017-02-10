'use strict';

SwaggerUi.Views.ApiVersView = Backbone.View.extend({

    initialize: function(opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    render: function () {
        var options = this.options;
        var el = $('<div/>');
        $.each(this.options.apiVersions, function (key, value) {
            el.append(Handlebars.templates.apivers_button({
                appServerUrl: options.appServerUrl,
                version: value,
                isActive: options.apiVer == value
            }));
        });

        this.$el.html(Handlebars.templates.apivers_view({
            'code': el.html()
        }));

        return this;
    }

});
