# irisjsMetatag

## Description
A simple module that provides a new field type 'Metatag' that can be added to any entity type. This currently only provides:
* title
* description
* keywords
fields. But as with any Iris field, these can be extended to add any other metatags you wish.

When the entity is being rendered, these fields are added to the HEAD section of the page.

## Installation
Simply run 'npm install irisjs-metatag' then edit the fields of an existing entity type (eg, /admin/schema/page/fields), add a new field, and in the 'Field type' list, there should be a new field type 'Metatag'.
After adding this new field to the entity type, go and edit or create a new entity of this type and you should see new fields available to add your metatag details to.
