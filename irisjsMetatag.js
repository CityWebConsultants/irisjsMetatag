

iris.modules.irisjsMetatag.registerHook("hook_entity_field_fieldType_form__metatag", 0, function (thisHook, data) {

  var value = thisHook.context.value;
  var fieldSettings = thisHook.context.fieldSettings;

  data = {
    "type": "object",
    "title" : thisHook.authPass.t('Meta tags'),
    "properties": {
      "title": {
        "type": "text",
        "title": thisHook.authPass.t("Page title")
      },
      "description": {
        "type": "text",
        "title": thisHook.authPass.t("Description")
      },
      "abstract": {
        "type": "text",
        "title": thisHook.authPass.t("Abstract")
      },
      "keywords": {
        "type": "text",
        "title": thisHook.authPass.t("Keywords")
      }
    }
  }

  if (value && value.title) {

    data.properties.title.default = value.title;

  }

  if (value && value.description) {

    data.properties.description.default = value.description;

  }

  if (value && value.abstract) {

    data.properties.abstract.default = value.abstract;

  }

  if (value && value.keywords) {

    data.properties.keywords.default = value.keywords;

  }

  thisHook.pass(data);

});

// Move image from temp on save

iris.modules.irisjsMetatag.registerHook("hook_entity_field_fieldType_save__metatag", 0, function (thisHook, data) {

  thisHook.pass(data);

});

iris.modules.irisjsMetatag.registerHook("hook_frontend_template", 0, function (thisHook, data) {

  if (thisHook.context.vars.current && thisHook.context.vars.current.entityType) {

    var entity = thisHook.context.vars.current;

    var schema = iris.entityTypes[entity.entityType];

    Object.keys(schema.fields).forEach(function(field) {

      if (schema.fields[field].fieldType === 'Metatag') {

        Object.keys(entity[field]).forEach(function(tag) {

          if (tag === '_id') {
            return;
          }
          if (tag !== 'title') {

            thisHook.context.vars.tags.headTags['meta_' + tag] = {
              type: "meta",
              attributes: {
                "name": tag,
                "content": entity[field][tag]
              },
              rank: 0
            };

          }
          else {

            thisHook.context.vars.tags.headTags['title'] = entity[field][tag];

          }

        });

      }

    });

  }

  thisHook.pass(data);

});