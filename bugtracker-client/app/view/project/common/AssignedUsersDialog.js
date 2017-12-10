Ext.define("Bugtracker.view.project.common.AssignedUsersDialog", {
  extend: "Ext.window.Window",
  xtype: "assignedusersdialog",
  reference: "form",
  title: "Assigned users",
  floating: true,
  centered: true,
  
  width: 500,
  y: 100,
  modal: true,
  layout:'fit',
  items: [
    {
      xtype: "assigneduserslist",
      reference: "assigneduserslist-ref",
      bind: {
        store: "{AssignedUsers}"
      }
    },
    {
      xtype: "toolbar",
      docked: "bottom",
      items: [
        "->",
        {
          xtype: "button",
          text: "Close",
          iconCls: "x-fa fa-close",
          handler: function() {
            this.up("window").destroy();
          }
        }
      ]
    }
  ]
});
