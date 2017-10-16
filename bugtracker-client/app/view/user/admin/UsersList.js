Ext.define("Bugtracker.view.user.admin.UsersList", {
  extend: "Ext.grid.Panel",
  xtype: "userslist",
  id: "userslist",
  title: "Users",

  columns: [
    { text: "ID", dataIndex: "id" },
    { text: "Name", dataIndex: "userName", flex: 1 },
    { text: "Email", dataIndex: "emailAddress", flex: 1 },
    { text: "Password", dataIndex: "password", flex: 1 }
  ]
});
