Ext.define("Bugtracker.view.project.admin.UpdateProjectDialog", {
  extend: "Ext.window.Window",
  xtype: "updateprojectdialog",
  reference: "form",
  title: "Update Project",
  floating: true,
  centered: true,
  width: 300,
  modal: true,

  items: [
    {
      xtype: "textfield",
      name: "projectname",
      id: "projectname",
      fieldLabel: "Project name"
    },
    {
      xtype: "textfield",
      name: "description",
      id: "description",
      fieldLabel: "Description"
    },
    {
      xtype: "userselector",
      name: "defaultapprover",
      id: "defaultapprover",
      fieldLabel: "Default approver",
      bind: {
        store: "{Users}"
      }
    },
    {
      xtype: "userselector",
      name: "defaultdeveloper",
      id: "defaultdeveloper",
      fieldLabel: "Default developer",
      bind: {
        store: "{Users}"
      }
    },
    {
      xtype: "numberfield",
      name: "s1time",
      id: "s1time",
      fieldLabel: "S1 time"
    },
    {
      xtype: "numberfield",
      name: "s2time",
      id: "s2time",
      fieldLabel: "S2 time"
    },
    {
      xtype: "numberfield",
      name: "s3time",
      id: "s3time",
      fieldLabel: "S3 time"
    },
    {
      xtype: "toolbar",
      docked: "bottom",
      items: [
        "->",
        {
          xtype: "button",
          text: "Submit",
          iconCls: "x-fa fa-check",
          formBind: true,
          handler: "updateProject"
        },
        {
          xtype: "button",
          text: "Cancel",
          iconCls: "x-fa fa-close",
          handler: function() {
            this.up("window").destroy();
          }
        }
      ]
    }
  ]
});
