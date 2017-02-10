'use strict';

SwaggerUi.Views.LinkButtonsView = Backbone.View.extend({
    tpls: {
        linkBtn: Handlebars.templates.link_button,
        linkView: Handlebars.templates.link_view
    },

    initialize: function(opts) {
        this.options = opts || {};
        this.router = this.options.router;
    },

    render: function () {
        var linkBtnsCode = '';
        var _this = this;
        $.each(this.options.apiVersions, function (key, value) {
            linkBtnsCode += _this.tpls.linkBtn({
                appServerUrl: _this.options.appServerUrl,
                version: value,
                color: _this.options.apiVer == value ? '#00ff40' : '#ffffff'
            });
        });

        this.$el.html(this.tpls.linkView({
            'code': linkBtnsCode
        }));

        return this;
    }

});
