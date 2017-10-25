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
        xtype: "userprojectslist",
        bind: {
          store: "{Projects}"
        }
      }
    ]
  });