Ext.define("Bugtracker.view.project.user.ProjectsTabController", {
  extend: "Bugtracker.view.ticket.TicketsController",
  alias: "controller.project.user.projectstabcontroller",

  requires: ["Bugtracker.view.project.common.ProjectHistoryDialog"],

  onRender: function() {
    this.loadProjectStore();
  },

  showTicketHistoryDialog: function() {
    var selected = Ext.getCmp('ticketslist-id').selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected ticket!");
    } else {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "showtickethistorydialog"
      });
      this.loadTicketHistoryStore(selected.data.id);
      this.dialog.show();
    }
  },

  showAssignedUsersDialog: function() {
    var selected = this.lookupReference("projectslist-ref").selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected project!");
    } else {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "assignedusersdialog"
      });
      this.loadAssignedUserStore(selected.data.id);
      this.dialog.show();
    }
  },

  showProjectHistoryDialog: function() {
    var selected = this.lookupReference("projectslist-ref").selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected project!");
    } else {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "showprojecthistorydialog"
      });
      this.loadProjectHistoryStore(selected.data.id);
      this.dialog.show();
    }
  },

  loadProjectStore: function(panel, eOpts) {
    this.loadStore("Projects", Urls.endpoint("/api/assignedProjects/" + localStorage.getItem("id")));
  },

  loadTicketsStore: function(panel, eOpts) {
    var projectId = this.lookupReference("projectslist-ref").selection.id;
    this.loadStore("Tickets", Urls.endpoint("/api/ticketsByProject/" + projectId));
  },

  loadTicketHistoryStore: function(ticketId) {
    this.loadStore("TicketHistory", Urls.endpoint("/api/ticketHistoryByticketId/" + ticketId));
  },

  loadAssignedUserStore: function(projectId) {
    this.loadStore("AssignedUsers", Urls.endpoint("/api/getUserRolesByProject?projectId=" +  projectId));
  },

  loadProjectHistoryStore: function(projectId) {
    this.loadStore("ProjectHistory", Urls.endpoint("/api/projectHistoryByProjectId/" + projectId));
  },

  // loadStore: function(type, url) {
  //   var store = this.getViewModel().getStore(type);
  //   var proxy = store.getProxy();
  //   proxy.headers.authorization = localStorage.getItem("JWT");
  //   if (url != undefined && url != null) {
  //     proxy.api.read = url;
  //   }
  //   store.setProxy(proxy);
  //   store.load();
  // },  

  onProjectClick: function(record, element, rowIndex, e, eOpts) {
    var view = this.getView();
    this.loadTicketsStore(element.data.id);
    this.dialog = view.add({
      xtype: "userprojectdetails",
      projectId : element.data.id,
      title: element.data.projectName,
      approver: element.data.defaultApprover,
      developer: element.data.defaultDeveloper,
      s1: element.data.s1Time,
      s2: element.data.s2Time,
      s3: element.data.s3Time,
      description: element.data.projectDescription,
    });
    this.dialog.show();	
  }
});
