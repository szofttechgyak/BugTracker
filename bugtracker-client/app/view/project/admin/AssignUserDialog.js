Ext.define("Bugtracker.view.project.admin.AssignUserDialog", {
  extend: "Ext.window.Window",
  xtype: "assignuserdialog",
  reference: "form",
  title: "Assign User",
  floating: true,
  centered: true,
  width: 300,
  modal: true,
  items: [
    {
      xtype: 'combobox',
      name: "userrole",
      id: "userrole",
      fieldLabel: 'Choose Role',
      queryMode: 'local',
      displayField: 'name',
      valueField: 'name',
      renderTo: Ext.getBody(),
      store: Ext.create('Ext.data.Store', {
        fields: ['name'],
        data : [
            {"name":"developer"},
            {"name":"approver"},
            {"name":"user"}
        ]
      })
    },
    {
      xtype: "userselector",
      name: "selecteduser",
      id: "selecteduser",
      fieldLabel: "Select somebody",
      bind: {
        store: "{Users}"
      }
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
          handler: "assignToProject"
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
