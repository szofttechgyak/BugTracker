Ext.define("Bugtracker.view.project.user.ProjectsTabController", {
  extend: "Ext.app.ViewController",

  alias: "controller.project.user.projectstabcontroller",

  onRender: function() {
    this.loadProjectStore();
  },

  loadProjectStore: function(panel, eOpts) {
    this.loadStore("Projects");
  },

  loadStore: function(type) {
    var store = this.getViewModel().getStore(type);
    var proxy = store.getProxy();
    proxy.headers.authorization = localStorage.getItem("JWT");
    store.setProxy(proxy);
    store.load();
  }
});
