Ext.define("Bugtracker.view.project.admin.ProjectsTab", {
  extend: "Ext.panel.Panel",
  xtype: "projects-tab",

  requires: ["Ext.button.Button", "Ext.Viewport", "Ext.data.Model", "Urls"],

  controller: "project.admin.projectstabcontroller",
  viewModel: {
    type: "project.admin.projectstabmodel"
  },

  listeners: {
    render: "onRender"
  },

  items: [
    {
      layout: {
        type: "hbox",
        pack: "start",
        align: "stretch"
      },

      margin: "0px 0px 5px 0px",

      items: [
        {
          xtype: "button",
          text: "Create Project",
          margin: "0px 2px 5px 0px",
          handler: "showNewProjectDialog"
        },
        {
          xtype: "button",
          text: "Delete selected",
          margin: "0px 2px 5px 0px",
          handler: "deleteProject"
        },
        {
          xtype: "button",
          text: "Update selected",
          margin: "0px 2px 5px 0px",
          handler: "showUpdateProjectDialog"
        }
      ]
    },
    {
      xtype: "projectslist",
      reference: "projectslist-ref",
      bind: {
        store: "{Projects}"
      }
    }
  ]
});
