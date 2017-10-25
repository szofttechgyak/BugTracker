Ext.define("Bugtracker.view.user.admin.UpdateUserDialog", {
  extend: "Ext.window.Window",
  xtype: "updateuserdialog",
  reference: "form",
  title: "Update User",
  floating: true,
  centered: true,
  width: 300,
  modal: true,

  setUser: function(user) {
    this.userID = user.id;
    Ext.getCmp("username").setValue(user.userName);
    Ext.getCmp("email").setValue(user.emailAddress);
    Ext.getCmp("password").setValue(user.password);
  },

  items: [
    {
      xtype: "textfield",
      name: "username",
      id: "username",
      fieldLabel: "Username"
    },
    {
      xtype: "textfield",
      name: "email",
      id: "email",
      fieldLabel: "E-mail"
    },
    {
      xtype: "textfield",
      name: "password",
      id: "password",
      fieldLabel: "Password"
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
          handler: "updateUser"
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
