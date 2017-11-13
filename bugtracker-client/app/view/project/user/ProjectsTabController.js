Ext.define("Bugtracker.view.project.user.ProjectsTabController", {
  extend: "Ext.app.ViewController",

  alias: "controller.project.user.projectstabcontroller",

  onRender: function() {
    this.loadProjectStore();
  },

  loadProjectStore: function(panel, eOpts) {
    var projectsStore = this.getViewModel().getStore("Projects");
    var proxy = projectsStore.getProxy();
    proxy.headers.authorization = localStorage.getItem("JWT");
    proxy.api.read = Urls.endpoint("/api/assignedProjects/" + localStorage.getItem("id")),
    projectsStore.setProxy(proxy);
    projectsStore.load();
  },

  loadStore: function(type) {
    var store = this.getViewModel().getStore(type);
    var proxy = store.getProxy();
    proxy.headers.authorization = localStorage.getItem("JWT");
    store.setProxy(proxy);
    store.load();
  }
});
