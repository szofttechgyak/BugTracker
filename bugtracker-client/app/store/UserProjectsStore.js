Ext.define("Bugtracker.store.UserProjectsStore", {
  extend: "Ext.data.Store",
  alias: "store.userprojects",
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
