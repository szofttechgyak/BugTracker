Ext.define("Bugtracker.view.project.common.ProjectHistoryDialog", {
  extend: "Ext.window.Window",
  xtype: "showprojecthistorydialog",
  reference: "form",
  title: "Project history",
  floating: true,
  centered: true,
  width: 600,
  height: 400,
  y: 100,
  modal: true,
  layout:'fit',
  items: [
    {
      xtype: "projecthistorylist",
      reference: "projecthistory-ref",
      bind: {
        store: "{ProjectHistory}"
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
