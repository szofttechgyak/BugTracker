Ext.define("Project", {
  extend: "Ext.data.Model",
  fields: [
    {
      name: "id",
      type: "int"
    },
    {
      name: "projectName",
      type: "string"
    },
    {
      name: "defaultApprover",
      type: "auto",
      mapping: "defaultApprover.userName"
    },
    {
      name: "defaultDeveloper",
      type: "auto",
      mapping: "defaultDeveloper.userName"
    },
    {
      name: "projectDescription",
      type: "string"
    },
    {
      name: "s1Time",
      type: "int"
    },
    {
      name: "s2Time",
      type: "int"
    },
    {
      name: "s3Time",
      type: "int"
    },
    {
      name: "tickets",
      type: "auto"
    },
    {
      name: "projectUser",
      type: "auto"
    }
  ]
});
