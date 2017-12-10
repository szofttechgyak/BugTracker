Ext.define("HistoryEntry", {
  extend: "Ext.data.Model",
  fields: [
    {
      name: "id",
      type: "int"
    },
    {
      name: "dateOfChange",
      type: "string"
    },
    {
      name: "fieldName",
      type: "string"
    },
    {
      name: "oldValue",
      type: "string"
    },
    {
      name: "newValue",
      type: "string"
    }
  ]
});
