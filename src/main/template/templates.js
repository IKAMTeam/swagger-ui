/* jshint ignore:start */ 
 {(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['apikey_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"key_auth__value\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":16,"column":46},"end":{"line":16,"column":66}}})) != null ? stack1 : "")
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <input placeholder=\"api_key\" class=\"auth_input input_apiKey_entry\" name=\"apiKey\" type=\"text\"/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"key_input_container\">\n    <h3 class=\"auth__title\">Api key authorization</h3>\n    <div class=\"auth__description\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":35},"end":{"line":3,"column":61}}})) != null ? stack1 : "")
    + "</div>\n    <div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">name:</span>\n            <span class=\"key_auth__value\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":7,"column":42},"end":{"line":7,"column":59}}})) != null ? stack1 : "")
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">in:</span>\n            <span class=\"key_auth__value\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"in") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":11,"column":42},"end":{"line":11,"column":57}}})) != null ? stack1 : "")
    + "</span>\n        </div>\n        <div class=\"key_auth__field\">\n            <span class=\"key_auth__label\">value:</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":15,"column":12},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div>\n";
},"useData":true});
templates['apivers_button'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"api_vers_button "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isActive") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":26},"end":{"line":1,"column":55}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"appServerUrl") || (depth0 != null ? lookupProperty(depth0,"appServerUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"appServerUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":79}}}) : helper)))
    + "/api/v"
    + alias4(((helper = (helper = lookupProperty(helpers,"version") || (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data,"loc":{"start":{"line":1,"column":85},"end":{"line":1,"column":96}}}) : helper)))
    + "\">\n    <span>API version "
    + alias4(((helper = (helper = lookupProperty(helpers,"version") || (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"version","hash":{},"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":2,"column":33}}}) : helper)))
    + "</span>\n</a>";
},"useData":true});
templates['apivers_view'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"api_vers\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"code") || (depth0 != null ? lookupProperty(depth0,"code") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"code","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});
templates['auth_button'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a class='authorize__btn' href=\"#\">Authorize</a>\n";
},"useData":true});
templates['auth_button_operation'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        authorize__btn_operation_login\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        authorize__btn_operation_logout\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <ul class=\"authorize-scopes\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"scopes") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "        </ul>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <li class=\"authorize__scope\" title=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":11,"column":52},"end":{"line":11,"column":76}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"scope") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":11,"column":78},"end":{"line":11,"column":96}}})) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"authorize__btn authorize__btn_operation\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":6,"column":11}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"scopes") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['auth_view'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"auth__button auth_submit__button\" data-sw-translate>Authorize</button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <button type=\"button\" class=\"auth__button auth_logout__button\" data-sw-translate>Logout</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"auth_container\">\n\n    <div class=\"auth_inner\"></div>\n    <div class=\"auth_submit\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAuthorized") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":10,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});
templates['basic_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " - authorized";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"basic_auth__value\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"username") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":69}}})) != null ? stack1 : "")
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <input required placeholder=\"username\" class=\"basic_auth__username auth_input\" name=\"username\" type=\"text\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"auth_label\">\n                <span class=\"basic_auth__label\" data-sw-translate>password:</span>\n                <input required placeholder=\"password\" class=\"basic_auth__password auth_input\" name=\"password\" type=\"password\"/></label>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='basic_auth_container'>\n    <h3 class=\"auth__title\">Basic authentication"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":84}}})) != null ? stack1 : "")
    + "</h3>\n    <form class=\"basic_input_container\">\n        <div class=\"auth__description\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":39},"end":{"line":4,"column":65}}})) != null ? stack1 : "")
    + "</div>\n        <div class=\"auth_label\">\n            <span class=\"basic_auth__label\" data-sw-translate>username:</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "    </form>\n</div>\n";
},"useData":true});
templates['bearer_token_auth'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " - authorized";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <span class=\"bearer_token_auth__value\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"accessKey") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":77}}})) != null ? stack1 : "")
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                <input placeholder=\"Access Key\" required class=\"bearer_token_auth__accessKey auth_input\" name=\"accessKey\" type=\"text\"/>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"auth_label\">\n                <span class=\"bearer_token_auth__label\" data-sw-translate>Secret Key:</span>\n                <input placeholder=\"Secret Key\" required class=\"bearer_token_auth__secretKey auth_input\" name=\"secretKey\" type=\"password\"/></label>\n            </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='bearer_token_auth_container'>\n    <h3 class=\"auth__title\">Token authentication"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":84}}})) != null ? stack1 : "")
    + "</h3>\n    <form class=\"bearer_token_input_container\">\n        <div class=\"auth__description\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":39},"end":{"line":4,"column":65}}})) != null ? stack1 : "")
    + "</div>\n        <div class=\"auth_label\">\n            <span class=\"bearer_token_auth__label\" data-sw-translate>Access Key:</span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":11,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isLogout") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":18,"column":19}}})) != null ? stack1 : "")
    + "    </form>\n</div>\n";
},"useData":true});
templates['content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"produces") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":6,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<option value=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":35}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":56}}})) != null ? stack1 : "")
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<label data-sw-translate for=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"contentTypeId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":56}}})) != null ? stack1 : "")
    + "\">Response Content Type</label>\n<select name=\"contentType\" id=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"contentTypeId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":2,"column":31},"end":{"line":2,"column":57}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"produces") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['main'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"apivers") || (depth0 != null ? lookupProperty(depth0,"apivers") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"apivers","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":15}}}) : helper))) != null ? stack1 : "")
    + "\n  <div class=\"info_title\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":51}}})) != null ? stack1 : "")
    + "</div>\n  <div class=\"info_description markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":72}}})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"externalDocs") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"termsOfServiceUrl") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":10,"column":167}}})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"name") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":11,"column":158}}})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":12,"column":164}}})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"email") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":206}}})) != null ? stack1 : "")
    + "\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"license") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":14,"column":151}}})) != null ? stack1 : "")
    + "\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <p>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"externalDocs") : depth0)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":7,"column":44}}})) != null ? stack1 : "")
    + "</p>\n  <a href=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"externalDocs") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":40}}})) != null ? stack1 : "")
    + "\" target=\"_blank\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"externalDocs") : depth0)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":8,"column":58},"end":{"line":8,"column":87}}})) != null ? stack1 : "")
    + "</a>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"info_tos\"><a target=\"_blank\" href=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"termsOfServiceUrl") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":10,"column":79},"end":{"line":10,"column":114}}})) != null ? stack1 : "")
    + "\" data-sw-translate>Terms of service</a></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div><div class='info_name' style=\"display: inline\" data-sw-translate>Created by </div> "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"name") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":11,"column":115},"end":{"line":11,"column":145}}})) != null ? stack1 : "")
    + "</div>";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='info_url' data-sw-translate>See more at <a href=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":12,"column":87},"end":{"line":12,"column":116}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":12,"column":118},"end":{"line":12,"column":147}}})) != null ? stack1 : "")
    + "</a></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='info_email'><a target=\"_parent\" href=\"mailto:"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"contact") : stack1)) != null ? lookupProperty(stack1,"email") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":13,"column":85},"end":{"line":13,"column":116}}})) != null ? stack1 : "")
    + "?subject="
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":13,"column":125},"end":{"line":13,"column":148}}})) != null ? stack1 : "")
    + "\" data-sw-translate>Contact the developer</a></div>";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='info_license'><a target=\"_blank\" href='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"license") : stack1)) != null ? lookupProperty(stack1,"url") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":14,"column":73},"end":{"line":14,"column":102}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"license") : stack1)) != null ? lookupProperty(stack1,"name") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":14,"column":104},"end":{"line":14,"column":134}}})) != null ? stack1 : "")
    + "</a></div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  , <span style=\"font-variant: small-caps\" data-sw-translate>api version</span>: "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"version") : stack1),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":25,"column":81},"end":{"line":25,"column":106}}})) != null ? stack1 : "")
    + "\n    ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span style=\"float:right\"><a target=\"_blank\" href=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"validatorUrl") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":28,"column":55},"end":{"line":28,"column":80}}})) != null ? stack1 : "")
    + "/debug?url="
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"url") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":28,"column":91},"end":{"line":28,"column":107}}})) != null ? stack1 : "")
    + "\"><img id=\"validator\" src=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"validatorUrl") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":28,"column":134},"end":{"line":28,"column":159}}})) != null ? stack1 : "")
    + "?url="
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"url") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":28,"column":164},"end":{"line":28,"column":180}}})) != null ? stack1 : "")
    + "\"></a>\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='info' id='api_info'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"info") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":15,"column":9}}})) != null ? stack1 : "")
    + "</div>\n<div class='container' id='resources_container'>\n  <div class='authorize-wrapper'></div>\n\n  <ul id='resources'></ul>\n\n  <div class=\"footer\">\n    <h4 style=\"color: #999\">[ <span style=\"font-variant: small-caps\">base url</span>: "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"basePath") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":23,"column":86},"end":{"line":23,"column":107}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"version") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "")
    + "]\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"validatorUrl") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "    </h4>\n    </div>\n</div>\n";
},"useData":true});
templates['oauth2'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p>Authorization URL: "
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"authorizationUrl") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":81}}})) != null ? stack1 : "")
    + "</p>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<p>Token URL: "
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tokenUrl") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":34},"end":{"line":5,"column":57}}})) != null ? stack1 : "")
    + "</p>";
},"5":function(container,depth0,helpers,partials,data) {
    return "        <p>Please input username and password for password flow authorization</p>\n        <fieldset>\n            <div><label>Username: <input class=\"oauth-username\" type=\"text\" name=\"username\"></label></div>\n            <div><label>Password: <input class=\"oauth-password\" type=\"password\" name=\"password\"></label></div>\n        </fieldset>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <p>Setup client authentication."
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"requireClientAuthenticaiton") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":39},"end":{"line":15,"column":91}}})) != null ? stack1 : "")
    + "</p>\n        <fieldset>\n            <div><label>Type:\n                <select class=\"oauth-client-authentication-type\" name=\"client-authentication-type\">\n                    <option value=\"none\" selected>None or other</option>\n                    <option value=\"basic\">Basic auth</option>\n                    <option value=\"request-body\">Request body</option>\n                </select>\n            </label></div>\n            <div class=\"oauth-client-authentication\" hidden>\n                <div><label>ClientId: <input class=\"oauth-client-id\" type=\"text\" name=\"client-id\"></label></div>\n                <div><label>Secret: <input class=\"oauth-client-secret\" type=\"text\" name=\"client-secret\"></label></div>\n            </div>\n        </fieldset>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "(Required)";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <li>\n                <input class=\"oauth-scope\" type=\"checkbox\" data-scope=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"scope") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":37,"column":71},"end":{"line":37,"column":89}}})) != null ? stack1 : "")
    + "\" oauthtype=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"OAuthSchemeKey") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":37,"column":102},"end":{"line":37,"column":129}}})) != null ? stack1 : "")
    + "\"/>\n                <label>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"scope") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":38,"column":23},"end":{"line":38,"column":41}}})) != null ? stack1 : "")
    + "</label><br/>\n                <span class=\"api-scope-desc\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":39,"column":45},"end":{"line":39,"column":69}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"OAuthSchemeKey") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":20},"end":{"line":42,"column":27}}})) != null ? stack1 : "")
    + "                </span>\n            </li>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        ("
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"OAuthSchemeKey") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":41,"column":25},"end":{"line":41,"column":52}}})) != null ? stack1 : "")
    + ")\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\n    <h3 class=\"auth__title\">OAuth2.0</h3>\n    <p>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":7},"end":{"line":3,"column":33}}})) != null ? stack1 : "")
    + "</p>\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"authorizationUrl") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":92}}})) != null ? stack1 : "")
    + "\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tokenUrl") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":68}}})) != null ? stack1 : "")
    + "\n    <p>flow: "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flow") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":30}}})) != null ? stack1 : "")
    + "</p>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPasswordFlow") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"clientAuthentication") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "    <p><strong> "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"appName") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":36}}})) != null ? stack1 : "")
    + " </strong> API requires the following scopes. Select which ones you want to grant to Swagger UI.</p>\n    <p>Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.\n        <a href=\"#\">Learn how to use</a>\n    </p>\n    <ul class=\"api-popup-scopes\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"scopes") : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":45,"column":17}}})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});
templates['operation'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "deprecated";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>\n          <a href='#!/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encodedParentId") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":15,"column":22},"end":{"line":15,"column":50}}}))
    + "/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":15,"column":51},"end":{"line":15,"column":72}}}))
    + "' class=\"toggleOperation\"><span class=\"nickname\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":15,"column":121},"end":{"line":15,"column":142}}})) != null ? stack1 : "")
    + "()</span></a>\n          </li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "            <h4><span data-sw-translate>Warning: Deprecated</span></h4>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <h4><span data-sw-translate>Implementation Notes</span></h4>\n        <div class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":29,"column":30},"end":{"line":29,"column":56}}})) != null ? stack1 : "")
    + "</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "            <div class='authorize-wrapper authorize-wrapper_operation'></div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"response-class\">\n            <h4><span data-sw-translate>Response Class</span> (<span data-sw-translate>Status</span> "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"successCode") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":36,"column":101},"end":{"line":36,"column":125}}})) != null ? stack1 : "")
    + ")</h4>\n              "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"successDescription") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":14},"end":{"line":37,"column":108}}})) != null ? stack1 : "")
    + "\n            <p><span class=\"model-signature\" /></p>\n            <br/>\n            <div class=\"response-content-type\" />\n            </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"successDescription") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":37,"column":62},"end":{"line":37,"column":95}}})) != null ? stack1 : "")
    + "</div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <h4 data-sw-translate>Headers</h4>\n          <table class=\"headers\">\n            <thead>\n              <tr>\n                <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Header</th>\n                <th style=\"width: 310px; max-width: 310px\" data-sw-translate>Description</th>\n                <th style=\"width: 200px; max-width: 200px\" data-sw-translate>Type</th>\n                <th style=\"width: 320px; max-width: 320px\" data-sw-translate>Other</th>\n              </tr>\n            </thead>\n            <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"headers") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":56,"column":14},"end":{"line":63,"column":23}}})) != null ? stack1 : "")
    + "            </tbody>\n          </table>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <tr>\n                <td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":58,"column":20},"end":{"line":58,"column":28}}}) : helper)))
    + "</td>\n                <td>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":59,"column":20},"end":{"line":59,"column":51}}})) != null ? stack1 : "")
    + "</td>\n                <td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":60,"column":20},"end":{"line":60,"column":42}}})) != null ? stack1 : "")
    + "</td>\n                <td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"other") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":61,"column":20},"end":{"line":61,"column":43}}})) != null ? stack1 : "")
    + "</td>\n              </tr>\n";
},"17":function(container,depth0,helpers,partials,data) {
    return "          <h4 data-sw-translate>Parameters</h4>\n          <table class='fullwidth parameters'>\n          <thead>\n            <tr>\n            <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Parameter</th>\n            <th style=\"width: 310px; max-width: 310px\" data-sw-translate>Value</th>\n            <th style=\"width: 200px; max-width: 200px\" data-sw-translate>Description</th>\n            <th style=\"width: 100px; max-width: 100px\" data-sw-translate>Parameter Type</th>\n            <th style=\"width: 220px; max-width: 230px\" data-sw-translate>Data Type</th>\n            </tr>\n          </thead>\n          <tbody class=\"operation-params\">\n\n          </tbody>\n          </table>\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "          <div style='margin:0;padding:0;display:inline'></div>\n          <h4 data-sw-translate>Response Messages</h4>\n          <table class='fullwidth response-messages'>\n            <thead>\n            <tr>\n              <th data-sw-translate>HTTP Status Code</th>\n              <th data-sw-translate>Reason</th>\n              <th data-sw-translate>Response Model</th>\n              <th data-sw-translate>Headers</th>\n            </tr>\n            </thead>\n            <tbody class=\"operation-status\">\n            </tbody>\n          </table>\n";
},"21":function(container,depth0,helpers,partials,data) {
    return "";
},"23":function(container,depth0,helpers,partials,data) {
    return "          <div class='sandbox_header'>\n            <input class='submit' type='submit' value='Try it out!' data-sw-translate/>\n            <a href='#' class='response_hider' style='display:none' data-sw-translate>Hide Response</a>\n            <span class='response_throbber' style='display:none'></span>\n          </div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    return "          <h4 data-sw-translate>Request Headers</h4>\n          <div class='block request_headers'></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <ul class='operations' >\n    <li class='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"method") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":2,"column":15},"end":{"line":2,"column":34}}})) != null ? stack1 : "")
    + " operation' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"parentId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":71}}})) != null ? stack1 : "")
    + "_"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":2,"column":72},"end":{"line":2,"column":93}}})) != null ? stack1 : "")
    + "'>\n      <div class='heading'>\n        <h3>\n          <span class='http_method'>\n          <a href='#!/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encodedParentId") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":6,"column":22},"end":{"line":6,"column":50}}}))
    + "/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":6,"column":51},"end":{"line":6,"column":72}}}))
    + "' class=\"toggleOperation\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"method") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":6,"column":98},"end":{"line":6,"column":117}}})) != null ? stack1 : "")
    + "</a>\n          </span>\n          <span class='path'>\n          <a href='#!/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encodedParentId") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":9,"column":22},"end":{"line":9,"column":50}}}))
    + "/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":9,"column":51},"end":{"line":9,"column":72}}}))
    + "' class=\"toggleOperation "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"deprecated") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":97},"end":{"line":9,"column":132}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"path") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":9,"column":134},"end":{"line":9,"column":151}}})) != null ? stack1 : "")
    + "</a>\n          </span>\n        </h3>\n        <ul class='options'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showOperationIds") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":17,"column":17}}})) != null ? stack1 : "")
    + "          <li>\n          <a href='#!/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encodedParentId") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":19,"column":22},"end":{"line":19,"column":50}}}))
    + "/"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":72}}}))
    + "' class=\"toggleOperation\"><span class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":19,"column":121},"end":{"line":19,"column":141}}})) != null ? stack1 : "")
    + "</span></a>\n          </li>\n        </ul>\n      </div>\n      <div class='content' id='"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"encodedParentId") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":23,"column":31},"end":{"line":23,"column":59}}}))
    + "_"
    + alias3((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"nickname") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":23,"column":60},"end":{"line":23,"column":81}}}))
    + "_content' style='display:none'>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"deprecated") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"security") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":33,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":42,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"headers") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":8},"end":{"line":66,"column":15}}})) != null ? stack1 : "")
    + "\n        <form accept-charset='UTF-8' class='sandbox'>\n          <div style='margin:0;padding:0;display:inline'></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"parameters") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":10},"end":{"line":86,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"responseMessages") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":10},"end":{"line":102,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isReadOnly") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":103,"column":10},"end":{"line":110,"column":17}}})) != null ? stack1 : "")
    + "        </form>\n        <div class='response' style='display:none'>\n          <h4 class='curl'>Curl</h4>\n          <div class='block curl'></div>\n          <h4 data-sw-translate>Request URL</h4>\n          <div class='block request_url'></div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"showRequestHeaders") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":10},"end":{"line":120,"column":17}}})) != null ? stack1 : "")
    + "          <h4 data-sw-translate>Response Body</h4>\n          <div class='block response_body'></div>\n          <h4 data-sw-translate>Response Code</h4>\n          <div class='block response_code'></div>\n          <h4 data-sw-translate>Response Headers</h4>\n          <div class='block response_headers'></div>\n        </div>\n      </div>\n    </li>\n  </ul>\n";
},"useData":true});
templates['param'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "<td colspan=\"2\" class=\"x-mq\">\n	<table>\n		<tbody class=\"x-mq-params\">\n		</tbody>\n	</table>\n\n	<div class=\"x-mq-param-buttons\">\n		<input type=\"button\" class=\"x-mq-param-add\" value=\"Add\" />\n		<input type=\"button\" class=\"x-mq-param-remove\" value=\"Remove last\" />\n	</div>\n</td>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<td class='code'>\n	<label for='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":15,"column":13},"end":{"line":15,"column":33}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":15,"column":35},"end":{"line":15,"column":52}}})) != null ? stack1 : "")
    + "</label>\n</td>\n<td>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isPartData") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":58,"column":11}}})) != null ? stack1 : "")
    + "\n</td>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"editor_holder\"></div>\n            <textarea class='body-textarea' name='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":22,"column":50},"end":{"line":22,"column":67}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":22,"column":73},"end":{"line":22,"column":93}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":22,"column":95},"end":{"line":22,"column":115}}})) != null ? stack1 : "")
    + "</textarea>\n            <br />\n            <div class=\"parameter-content-type\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <textarea class='body-textarea' name='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":26,"column":50},"end":{"line":26,"column":67}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":26,"column":73},"end":{"line":26,"column":93}}})) != null ? stack1 : "")
    + "'></textarea>\n            <div class=\"editor_holder\"></div>\n            <br />\n            <div class=\"parameter-content-type\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isBody") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":57,"column":15}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isFile") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":33,"column":12},"end":{"line":48,"column":19}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <input type=\"file\" name='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":34,"column":41},"end":{"line":34,"column":58}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":34,"column":64},"end":{"line":34,"column":84}}})) != null ? stack1 : "")
    + "'/>\n                <div class=\"parameter-content-type\" />\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":37,"column":16},"end":{"line":47,"column":23}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"editor_holder\"></div>\n                    <textarea class='body-textarea' name='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":39,"column":58},"end":{"line":39,"column":75}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":39,"column":81},"end":{"line":39,"column":101}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":39,"column":103},"end":{"line":39,"column":123}}})) != null ? stack1 : "")
    + "</textarea>\n            <br />\n            <div class=\"parameter-content-type\" />\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <textarea class='body-textarea' name='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":43,"column":58},"end":{"line":43,"column":75}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":43,"column":81},"end":{"line":43,"column":101}}})) != null ? stack1 : "")
    + "'></textarea>\n                    <div class=\"editor_holder\"></div>\n                    <br />\n                    <div class=\"parameter-content-type\" />\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isFile") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":50,"column":12},"end":{"line":56,"column":19}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"renderTextParam")||(depth0 && lookupProperty(depth0,"renderTextParam"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"renderTextParam","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":16},"end":{"line":55,"column":36}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isXMultipleQueryParams") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":61,"column":7}}})) != null ? stack1 : "")
    + "<td class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":62,"column":21},"end":{"line":62,"column":47}}})) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"paramType") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":63,"column":4},"end":{"line":63,"column":26}}})) != null ? stack1 : "")
    + "</td>\n<td>\n	<span class=\"model-signature\"></span>\n</td>\n";
},"useData":true});
templates['param_list'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " required";
},"3":function(container,depth0,helpers,partials,data) {
    return " multiple=\"multiple\"";
},"5":function(container,depth0,helpers,partials,data) {
    return " required ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <option "
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"hasDefault") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":61}}})) != null ? stack1 : "")
    + " value=''></option>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "  selected=\"\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n      <option "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDefault") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":52}}})) != null ? stack1 : "")
    + "  value='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":11,"column":61},"end":{"line":11,"column":81}}})) != null ? stack1 : "")
    + "'> "
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":11,"column":84},"end":{"line":11,"column":104}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isDefault") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":105},"end":{"line":11,"column":140}}})) != null ? stack1 : "")
    + " </option>\n\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " selected=\"\"  ";
},"13":function(container,depth0,helpers,partials,data) {
    return " (default) ";
},"15":function(container,depth0,helpers,partials,data) {
    return "<strong>";
},"17":function(container,depth0,helpers,partials,data) {
    return "</strong>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<td class='code"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":47}}})) != null ? stack1 : "")
    + "'><label for='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":61},"end":{"line":1,"column":81}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":1,"column":83},"end":{"line":1,"column":102}}})) != null ? stack1 : "")
    + "</label></td>\n<td>\n  <select "
    + ((stack1 = (lookupProperty(helpers,"isArray")||(depth0 && lookupProperty(depth0,"isArray"))||alias2).call(alias1,depth0,{"name":"isArray","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":10},"end":{"line":3,"column":59}}})) != null ? stack1 : "")
    + " class=\"parameter "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":77},"end":{"line":3,"column":110}}})) != null ? stack1 : "")
    + "\" name=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":118},"end":{"line":3,"column":137}}})) != null ? stack1 : "")
    + "\" id=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":3,"column":143},"end":{"line":3,"column":163}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"allowableValues") : depth0)) != null ? lookupProperty(stack1,"descriptiveValues") : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "\n  </select>\n</td>\n<td class=\"markdown\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":21},"end":{"line":17,"column":52}}})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":17,"column":52},"end":{"line":17,"column":69}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"required") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":69},"end":{"line":17,"column":101}}})) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"paramType") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":26}}})) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['param_readonly'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <textarea class='body-textarea' readonly='readonly' name='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":66},"end":{"line":4,"column":85}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":111}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":113},"end":{"line":4,"column":135}}})) != null ? stack1 : "")
    + "</textarea>\n        <div class=\"parameter-content-type\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":8,"column":34}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            (empty)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<td class='code'><label for='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":49}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":70}}})) != null ? stack1 : "")
    + "</label></td>\n<td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isBody") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":14,"column":21},"end":{"line":14,"column":47}}})) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"paramType") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":26}}})) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['param_readonly_required'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <textarea class='body-textarea' readonly='readonly' placeholder='(required)' name='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":91},"end":{"line":4,"column":110}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":4,"column":116},"end":{"line":4,"column":136}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":4,"column":138},"end":{"line":4,"column":160}}})) != null ? stack1 : "")
    + "</textarea>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":10,"column":15}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":34}}})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            (empty)\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<td class='code required'><label for='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":58}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":1,"column":60},"end":{"line":1,"column":79}}})) != null ? stack1 : "")
    + "</label></td>\n<td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isBody") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "")
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":13,"column":21},"end":{"line":13,"column":47}}})) != null ? stack1 : "")
    + "</td>\n<td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"paramType") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":26}}})) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['param_required'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isFile") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<input type=\"file\" name='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":5,"column":28},"end":{"line":5,"column":45}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":5,"column":51},"end":{"line":5,"column":71}}})) != null ? stack1 : "")
    + "'/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":3},"end":{"line":17,"column":10}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<div class=\"editor_holder\"></div>\n				<textarea class='body-textarea required' placeholder='(required)' name='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":9,"column":76},"end":{"line":9,"column":95}}})) != null ? stack1 : "")
    + "' id=\""
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":9,"column":101},"end":{"line":9,"column":121}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"default") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":9,"column":123},"end":{"line":9,"column":145}}})) != null ? stack1 : "")
    + "</textarea>\n        <br />\n        <div class=\"parameter-content-type\" />\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				<textarea class='body-textarea required' placeholder='(required)' name='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":13,"column":76},"end":{"line":13,"column":95}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":13,"column":101},"end":{"line":13,"column":121}}})) != null ? stack1 : "")
    + "'></textarea>\n				<div class=\"editor_holder\"></div>\n				<br />\n				<div class=\"parameter-content-type\" />\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isFile") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":25,"column":9}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "			<input class='parameter required' type='file' name='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":21,"column":55},"end":{"line":21,"column":74}}})) != null ? stack1 : "")
    + "' id='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":21,"column":80},"end":{"line":21,"column":100}}})) != null ? stack1 : "")
    + "'/>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"renderTextParam")||(depth0 && lookupProperty(depth0,"renderTextParam"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"renderTextParam","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":3},"end":{"line":24,"column":23}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<td class='code required'><label for='"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"valueId") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":38},"end":{"line":1,"column":58}}})) != null ? stack1 : "")
    + "'>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":60},"end":{"line":1,"column":77}}})) != null ? stack1 : "")
    + "</label></td>\n<td>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isBody") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":26,"column":8}}})) != null ? stack1 : "")
    + "</td>\n<td>\n	<strong><span class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":29,"column":32},"end":{"line":29,"column":58}}})) != null ? stack1 : "")
    + "</span></strong>\n</td>\n<td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"paramType") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":31,"column":26}}})) != null ? stack1 : "")
    + "</td>\n<td><span class=\"model-signature\"></span></td>\n";
},"useData":true});
templates['parameter_content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"consumes") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":6,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <option value=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":36}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":57}}})) != null ? stack1 : "")
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<label for=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"parameterContentTypeId") || (depth0 != null ? lookupProperty(depth0,"parameterContentTypeId") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"parameterContentTypeId","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":38}}}) : helper)))
    + "\" data-sw-translate>Parameter content type:</label>\n<select name=\"parameterContentType\" id=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"parameterContentTypeId") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":2,"column":40},"end":{"line":2,"column":77}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"consumes") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['popup'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"api-popup-dialog-wrapper\">\n    <div class=\"api-popup-title\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":33},"end":{"line":2,"column":42}}}) : helper)))
    + "</div>\n    <div class=\"api-popup-content\"></div>\n    <p class=\"error-msg\"></p>\n    <div class=\"api-popup-actions\">\n        <button class=\"api-popup-cancel api-button gray\" type=\"button\">Cancel</button>\n    </div>\n</div>\n<div class=\"api-popup-dialog-shadow\"></div>";
},"useData":true});
templates['resource'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " : ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li>\n      <a href='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"url") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":21,"column":15},"end":{"line":21,"column":33}}})) != null ? stack1 : "")
    + "' data-sw-translate>Raw</a>\n    </li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div class='heading'>\n  <h2>\n    <a href='#!/"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":16},"end":{"line":3,"column":33}}})) != null ? stack1 : "")
    + "' class=\"toggleEndpointList\" data-id=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":71},"end":{"line":3,"column":88}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":90},"end":{"line":3,"column":109}}})) != null ? stack1 : "")
    + "</a> ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(options={"name":"summary","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":114},"end":{"line":3,"column":141}}}),(typeof helper === "function" ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"summary")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"summary") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":3,"column":141},"end":{"line":3,"column":163}}})) != null ? stack1 : "")
    + "\n  </h2>\n  <ul class='options'>\n    <li>\n      <a href='#!/"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":7,"column":18},"end":{"line":7,"column":35}}})) != null ? stack1 : "")
    + "' id='endpointListTogger_"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":7,"column":60},"end":{"line":7,"column":77}}})) != null ? stack1 : "")
    + "' class=\"toggleEndpointList\" data-id=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":7,"column":115},"end":{"line":7,"column":132}}})) != null ? stack1 : "")
    + "\" data-sw-translate>Show/Hide</a>\n    </li>\n    <li>\n      <a href='#' class=\"collapseResource\" data-id=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":10,"column":52},"end":{"line":10,"column":69}}})) != null ? stack1 : "")
    + "\" data-sw-translate>\n        List Operations\n      </a>\n    </li>\n    <li>\n      <a href='#' class=\"expandResource\" data-id=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":15,"column":50},"end":{"line":15,"column":67}}})) != null ? stack1 : "")
    + "\" data-sw-translate>\n        Expand Operations\n      </a>\n    </li>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"url") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":23,"column":11}}})) != null ? stack1 : "")
    + "  </ul>\n</div>\n<ul class='endpoints' id='"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"id") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":26,"column":26},"end":{"line":26,"column":43}}})) != null ? stack1 : "")
    + "_endpoint_list' style='display:none'>\n\n</ul>\n";
},"useData":true});
templates['response_content_type'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"produces") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":6,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <option value=\""
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":36}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,depth0,{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":57}}})) != null ? stack1 : "")
    + "</option>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <option value=\"application/json\">application/json</option>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<label data-sw-translate for=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"responseContentTypeId") || (depth0 != null ? lookupProperty(depth0,"responseContentTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseContentTypeId","hash":{},"data":data,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":55}}}) : helper)))
    + "\">Response Content Type</label>\n<select name=\"responseContentType\" id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"responseContentTypeId") || (depth0 != null ? lookupProperty(depth0,"responseContentTypeId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"responseContentTypeId","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":64}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"produces") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "")
    + "</select>\n";
},"useData":true});
templates['signature'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div>\n<ul class=\"signature-nav\">\n  <li><a class=\"description-link\" href=\"#\" data-sw-translate>Model</a></li>\n  <li><a class=\"snippet-link\" href=\"#\" data-sw-translate>Example Value</a></li>\n</ul>\n<div>\n\n<div class=\"signature-container\">\n  <div class=\"description\">\n      "
    + container.escapeExpression((lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"signature") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":28}}}))
    + "\n  </div>\n\n  <div class=\"snippet\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sampleJSON") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":21,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sampleXML") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":27,"column":9}}})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"snippet_json\">\n        <pre><code>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"sampleJSON") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":18,"column":19},"end":{"line":18,"column":42}}})) != null ? stack1 : "")
    + "</code></pre>\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isParam") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":78}}})) != null ? stack1 : "")
    + "\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<small class=\"notice\" data-sw-translate></small>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"snippet_xml\">\n      <pre><code>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"sampleXML") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":24,"column":17},"end":{"line":24,"column":39}}})) != null ? stack1 : "")
    + "</code></pre>\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isParam") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":6},"end":{"line":25,"column":76}}})) != null ? stack1 : "")
    + "\n    </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"signature") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":31,"column":26}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifCond")||(depth0 && lookupProperty(depth0,"ifCond"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"sampleJSON") : depth0),"||",(depth0 != null ? lookupProperty(depth0,"sampleXML") : depth0),{"name":"ifCond","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":32,"column":11}}})) != null ? stack1 : "");
},"useData":true});
templates['status_code'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <tr>\n        <td>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":20}}}) : helper)))
    + "</td>\n        <td>"
    + ((stack1 = (lookupProperty(helpers,"sanitize")||(depth0 && lookupProperty(depth0,"sanitize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"sanitize","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":43}}})) != null ? stack1 : "")
    + "</td>\n        <td>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"type") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":34}}})) != null ? stack1 : "")
    + "</td>\n      </tr>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<td width='15%' class='code'>"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"code") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":1,"column":29},"end":{"line":1,"column":46}}})) != null ? stack1 : "")
    + "</td>\n<td class=\"markdown\">"
    + ((stack1 = (lookupProperty(helpers,"escape")||(depth0 && lookupProperty(depth0,"escape"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"message") : depth0),{"name":"escape","hash":{},"data":data,"loc":{"start":{"line":2,"column":21},"end":{"line":2,"column":41}}})) != null ? stack1 : "")
    + "</td>\n<td width='50%'><span class=\"model-signature\" /></td>\n<td class=\"headers\">\n  <table>\n    <tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"headers") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":13,"column":15}}})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n</td>";
},"useData":true});
templates['x_mq_param'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<td>\n	<input type=\"text\" class=\"x-mq-param-name\" placeholder=\"Name\" />\n</td>\n<td>\n	<div class=\"x-mq-eqchar\">=</div>\n</td>\n<td>\n	<input type=\"text\" class=\"x-mq-param-value\" placeholder=\"Value\" />\n</td>";
},"useData":true});
})();} 
 /* jshint ignore:end */