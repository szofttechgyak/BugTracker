Ext.define("Bugtracker.view.project.user.TicketHistoryDialog", {
  extend: "Ext.window.Window",
  xtype: "showtickethistorydialog",
  reference: "form",
  title: "Ticket history",
  floating: true,
  centered: true,
  width: 600,
  height: 400,
  y: 100,
  modal: true,
  layout:'fit',
  items: [
    {
      xtype: "tickethistorylist",
      bind: {
        store: "{TicketHistory}"
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
