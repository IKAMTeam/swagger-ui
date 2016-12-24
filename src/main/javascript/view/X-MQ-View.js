'use strict';

SwaggerUi.Views.X_MQ_Param = Backbone.View.extend({
  initialize: function(){},

  render: function(){
    $(this.el).html(Handlebars.templates.x_mq_param(this.model));
    return this;
  }
});
