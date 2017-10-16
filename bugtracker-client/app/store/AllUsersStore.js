Ext.define("Bugtracker.store.AllUsersStore", {
  extend: "Ext.data.Store",
  alias: "store.allusers",
  autoLoad: false,
  autoSync: true,
  model: "User",

  requires: ["Urls"],

  proxy: {
    type: "rest",

    headers: {
      authorization: localStorage.getItem("JWT")
    },

    url: Urls.endpoint("/api/users"),
    reader: {
      type: "json"
    },
    writer: {
      type: "json"
    }
  }
});
