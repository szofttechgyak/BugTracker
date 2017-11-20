Ext.define("Bugtracker.view.project.user.ProjectHistoryList", {
  extend: "Ext.grid.Panel",
  xtype: "projecthistorylist",
  title: "Project history",
  autoScroll: true,

  columns: [
    {
      text: "Field name",
      dataIndex: "fieldName",
      flex: 1,
      align: "center"
    },
    {
      text: "Old value",
      dataIndex: "oldValue",
      flex: 1,
      align: "center"
    },
    {
      text: "New value",
      dataIndex: "newValue",
      flex: 1,
      align: "center"
    },
    {
      text: "Date of change",
      dataIndex: "dateOfChange",
      flex: 1,
      align: "center"
    }
  ]
});
