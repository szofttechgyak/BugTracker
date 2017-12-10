Ext.define("Bugtracker.view.project.admin.ProjectsList", {
  extend: "Ext.grid.Panel",
  xtype: "adminprojectslist",
  title: "Projects",
  // height : Ext.getBody().getViewSize().height,
  autoScroll: true,

  columns: [
    {
      text: "Name",
      dataIndex: "projectName",
      flex: 1,
      align: "center"
    },
    {
      text: "S1 Time (in hours)",
      dataIndex: "s1Time",
      flex: 1,
      align: "center"
    },
    {
      text: "S2 Time (in hours)",
      dataIndex: "s2Time",
      flex: 1,
      align: "center"
    },
    {
      text: "S3 Time (in hours)",
      dataIndex: "s3Time",
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
