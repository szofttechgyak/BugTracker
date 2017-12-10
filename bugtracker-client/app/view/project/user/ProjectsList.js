Ext.define("Bugtracker.view.project.user.ProjectsList", {
  extend: "Ext.grid.Panel",
  xtype: "userprojectslist",
  title: "My Projects",
  autoScroll: true,

  listeners: {
		rowdblclick: 'onProjectClick'
	},

  columns: [
    {
      text: "Name",
      dataIndex: "projectName",
      flex: 1,
      align: "center"
    },
    {
      text: "Default developer",
      dataIndex: "defaultDeveloper",
      flex: 1,
      align: "center"
    },
    {
      text: "Default approver",
      dataIndex: "defaultApprover",
      flex: 1,
      align: "center"
    }
  ]
});
