Ext.define("Bugtracker.store.CommentsStore", {
  extend: "Ext.data.Store",
  alias: "store.comments",
  autoLoad: false,
  autoSync: true,
  model: "Comment",

  requires: ["Urls"],

  proxy: {
    type: "rest",

    headers: {
      authorization: localStorage.getItem("JWT")
    },

    url: Urls.endpoint("/api/getCommentsForTicket"),
    reader: {
      type: "json"
    },
    writer: {
      type: "json"
    }
  }
});
