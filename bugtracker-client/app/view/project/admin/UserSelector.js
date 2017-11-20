Ext.define("Bugtracker.view.project.admin.UserSelector", {
  extend: "Ext.form.field.ComboBox",
  xtype: "userselector",
  fieldLabel: "Choose User",
  queryMode: "local",
  displayField: "userName",
  valueField: "id",
});
