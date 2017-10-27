Ext.define("Bugtracker.view.project.admin.NewProjectDialog", {
  extend: "Ext.window.Window",
  xtype: "newprojectdialog",
  title: "Create Project",
  floating: true,
  centered: true,
  width: 300,
  modal: true,
  items: [
    {
      xtype: 'form',
      items: [
          {
            xtype: "textfield",
            name: "projectname",
            id: "projectname",
            fieldLabel: "Project name",
            allowBlank: false,
            maxLength: 30
          },
          {
            xtype: "textareafield",
            name: "description",
            id: "description",
            fieldLabel: "Description",
            maxLength: 250,
            height: 50
          },
          {
            xtype: "userselector",
            name: "defaultapprover",
            id: "defaultapprover",
            fieldLabel: "Default approver",
            allowBlank: false,
            bind: {
              store: "{Users}"
            }
          },
          {
            xtype: "userselector",
            name: "defaultdeveloper",
            id: "defaultdeveloper",
            fieldLabel: "Default developer",
            allowBlank: false,
            bind: {
              store: "{Users}"
            }
          },
          {
            xtype: "numberfield",
            name: "s1time",
            id: "s1time",
            fieldLabel: "S1 time",
            minvalue: 1,
            allowBlank: false,
            blankText: 'Set time',
            emptyText : 'in hours'
          },
          {
            xtype: "numberfield",
            name: "s2time",
            id: "s2time",
            fieldLabel: "S2 time",
            minvalue: 1,
            allowBlank: false,
            blankText: 'Set time',
            emptyText : 'in hours'
          },
          {
            xtype: "numberfield",
            name: "s3time",
            id: "s3time",
            fieldLabel: "S3 time",
            minvalue: 1,
            allowBlank: false,
            blankText: 'Set time',
            emptyText : 'in hours'
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
                handler: "createNewProject"
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
    }
  ]
});
