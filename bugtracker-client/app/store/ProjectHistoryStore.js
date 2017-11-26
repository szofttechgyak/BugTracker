Ext.define("Bugtracker.store.ProjectHistoryStore", {
  extend: "Ext.data.Store",
  alias: "store.projecthistory",
  autoLoad: false,
  autoSync: true,
  model: "HistoryEntry",

  requires: ["Urls"],

  proxy: {
    type: "rest",

    headers: {
      authorization: localStorage.getItem("JWT")
    },

    url: Urls.endpoint("/api/projectHistory"),
    reader: {
      type: "json"
    },
    writer: {
      type: "json"
    }
  }
});
