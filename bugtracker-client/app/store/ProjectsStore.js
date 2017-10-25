Ext.define("Bugtracker.store.ProjectsStore", {
  extend: "Ext.data.Store",
  alias: "store.projects",
  autoLoad: false,
  autoSync: true,
  model: "Project",

  requires: ["Urls"],

  proxy: {
    type: "rest",

    headers: {
      authorization: localStorage.getItem("JWT")
    },

    url: Urls.endpoint("/api/projects"),
    reader: {
      type: "json"
    },
    writer: {
      type: "json"
    }
  }
});
