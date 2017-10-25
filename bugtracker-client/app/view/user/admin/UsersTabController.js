Ext.define("Bugtracker.view.user.admin.UsersTabController", {
  extend: "Ext.app.ViewController",

  alias: "controller.user.admin.userstabcontroller",

  showNewUserDialog: function() {
    var view = this.getView();
    this.dialog = view.add({
      xtype: "newuserdialog"
    });
    this.dialog.show();
  },

  showUpdateUserDialog: function() {
    var selected = Ext.getCmp("userslist").selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected user!");
    } else {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "updateuserdialog"
      });
      this.dialog.setUser(selected.data);
      this.dialog.show();
    }
  },

  deleteUser: function() {
    var selected = Ext.getCmp("userslist").selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected user!");
    } else {
      Ext.Ajax.request({
        url: Urls.endpoint("/api/removeUser/" + selected.id),
        method: "POST",
        headers: {
          authorization: localStorage.getItem("JWT")
        },
        success: function(response) {
          Ext.getCmp("userslist")
            .getStore()
            .load();
          Ext.MessageBox.alert("Ok", "User successfully deleted!");
        },
        failure: function(response) {
          Ext.MessageBox.alert("Error", "Cannot delete user");
        }
      });
    }
  },

  createNewUser: function() {
    var user = {
      userName: Ext.getCmp("username").getValue(),
      emailAddress: Ext.getCmp("email").getValue(),
      password: Ext.getCmp("password").getValue(),
      admin: false
    };

    Ext.Ajax.request({
      url: Urls.endpoint("/api/addUser"),
      method: "POST",
      jsonData: user,
      headers: {
        authorization: localStorage.getItem("JWT")
      },
      success: function(response) {
        Ext.getCmp("userslist")
          .getStore()
          .load();
        Ext.MessageBox.alert("Ok", "User successfully created!");
      },
      failure: function(response) {
        Ext.MessageBox.alert("Error", "Cannot create user");
      }
    });
    this.dialog.destroy();
  },

  updateUser: function() {
    var user = {
      userName: Ext.getCmp("username").getValue(),
      emailAddress: Ext.getCmp("email").getValue(),
      password: Ext.getCmp("password").getValue(),
      admin: false
    };

    Ext.Ajax.request({
      url: Urls.endpoint("/api/updateUser/" + this.dialog.userID),
      method: "POST",
      jsonData: user,
      headers: {
        authorization: localStorage.getItem("JWT")
      },
      success: function(response) {
        Ext.getCmp("userslist")
          .getStore()
          .load();
        Ext.MessageBox.alert("Ok", "User successfully updated!");
      },
      failure: function(response) {
        Ext.MessageBox.alert("Error", "Cannot update user!");
      }
    });
    this.dialog.destroy();
  },

  loadStore: function(panel, eOpts) {
    var store = this.getViewModel().getStore("Users");
    var proxy = store.getProxy();
    proxy.headers.authorization = localStorage.getItem("JWT");
    store.setProxy(proxy);
    store.load();
  }
});
