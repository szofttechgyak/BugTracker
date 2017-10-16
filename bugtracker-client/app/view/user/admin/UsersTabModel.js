Ext.define("Bugtracker.view.user.admin.UsersTabModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.user.admin.userstabmodel",

  stores: {
    Users: {
      type: "allusers"
    }
  }
});
