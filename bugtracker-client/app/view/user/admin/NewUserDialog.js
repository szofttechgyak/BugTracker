Ext.define("Bugtracker.view.user.admin.NewUserDialog", {
  extend: "Ext.window.Window",
  xtype: "newuserdialog",
  reference: "form",
  title: "Create User",
  floating: true,
  centered: true,
  width: 300,
  modal: true,
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
      inputType: "password",
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
          handler: "createNewUser"
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
