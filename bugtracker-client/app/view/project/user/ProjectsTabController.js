Ext.define("Bugtracker.view.project.user.ProjectsTabController", {
  extend: "Ext.app.ViewController",

  alias: "controller.project.user.projectstabcontroller",

  onRender: function() {
    this.loadProjectStore();
  },

  loadProjectStore: function(panel, eOpts) {
    this.loadStore('Projects', "/api/assignedProjects/" + localStorage.getItem("id"))
  },

  loadTicketsStore: function(panel, eOpts) {
    this.loadStore("Tickets", '/api/tickets');
  },

  loadProjectTicketsStore: function(id) {
    this.loadStore('Tickets', "/api/ticketsByProject/" + id)
  },

  loadStore: function(type, endpoint) {
    var store = this.getViewModel().getStore(type);
    var proxy = store.getProxy();
    proxy.headers.authorization = localStorage.getItem("JWT");
    proxy.api.read = Urls.endpoint(endpoint),
    store.setProxy(proxy);
    store.load();
  },

  onProjectClick: function(record, element, rowIndex, e, eOpts) {
    var view = this.getView();
    this.loadProjectTicketsStore(element.data.id);
    this.dialog = view.add({
      xtype: "userprojectdetails",
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
