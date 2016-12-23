'use strict';

SwaggerUi.Views.CustomParameterView = Backbone.View.extend({
  initialize: function(){},

  render: function(){
    $(this.el).html(Handlebars.templates.custom_param(this.model));
    return this;
  }
});

SwaggerUi.Views.CustomParameterSingleView = Backbone.View.extend({
  initialize: function(){},

  render: function(){
    $(this.el).html(Handlebars.templates.custom_param_single(this.model));
    return this;
  }
});