Ext.define("Bugtracker.view.user.admin.UsersTab", {
  extend: "Ext.panel.Panel",
  xtype: "users-tab",

  requires: ["Ext.button.Button", "Ext.Viewport", "Ext.data.Model", "Urls"],

  controller: "user.admin.userstabcontroller",

  listeners: {
    render: "loadStore"
  },

  items: [
    {
      layout: {
        type: "hbox",
        pack: "start",
        align: "stretch"
      },

      margin: "0px 0px 5px 0px",

      items: [
        {
          xtype: "button",
          text: "Create User",
          margin: "0px 2px 5px 0px",
          handler: "showNewUserDialog"
        },
        {
          xtype: "button",
          text: "Delete selected",
          margin: "0px 2px 5px 0px",
          handler: "deleteUser"
        },
        {
          xtype: "button",
          text: "Update selected",
          margin: "0px 2px 5px 0px",
          handler: "showUpdateUserDialog"
        }
        //  {
        // 	xtype : 'button',
        // 	text : 'Assign to project',
        // 	margin: '0px 2px 5px 0px',
        // 	handler : function() {
        // 		var selected = Ext.getCmp('userslist').selection;
        // 		if (selected === null) {
        // 			Ext.MessageBox.alert('Error', 'No selected user!');
        // 		} else {
        // 			var dialog = Ext.create('Bugtracker.view.main.UsersTab.AssignToProjectDialog');
        // 			dialog.setUser(selected.data);
        // 			dialog.show();
        // 		}
        // 	},
        // }
      ]
    },
    {
      xtype: "userslist",
      bind: {
        store: "{Users}"
      }
    }
  ]
});
