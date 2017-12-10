Ext.define("Bugtracker.view.project.common.AssignedUsersList", {
  extend: "Ext.grid.Panel",
  xtype: "assigneduserslist",
  title: "Assigned users",
  autoScroll: true,

  columns: [
    {
      text: "Role Name",
      dataIndex: "roleName",
      flex: 2,
      align: "center"
    },
    {
      text: "Users",
      dataIndex: "users",
      flex: 6,
      align: "center"
    },
  ]
});
