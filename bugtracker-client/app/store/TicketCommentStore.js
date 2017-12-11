Ext.define("Bugtracker.store.TicketCommentStore", {
  extend: "Ext.data.Store",
  alias: "store.ticketcomment",
  autoLoad: false,
  autoSync: true,
  model: "CommentEntry",

  requires: ["Urls"],

  proxy: {
    type: "rest",

    headers: {
      authorization: localStorage.getItem("JWT")
    },

    url: Urls.endpoint("/api/comments"),
    reader: {
      type: "json"
    },
    writer: {
      type: "json"
    }
  }
});
