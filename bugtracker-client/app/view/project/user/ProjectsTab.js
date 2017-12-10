Ext.define("Bugtracker.view.project.user.ProjectsTab", {
    extend: "Ext.panel.Panel",
    xtype: "userprojectstab",
  
    requires: ["Ext.button.Button", "Ext.Viewport", "Ext.data.Model", "Urls"],
  
    controller: "project.user.projectstabcontroller",
  
    listeners: {
      render: "onRender"
    },
  
    items: [
      {
        xtype: "button",
        text: "Show project history",
        margin: "0px 2px 5px 0px",
        handler: "showProjectHistoryDialog"
      },
      {
        xtype: "userprojectslist",
        reference: "projectslist-ref",
        bind: {
          store: "{Projects}"
        }
      }
    ]
  });