Ext.define("Bugtracker.store.TicketHistoryStore", {
  extend: "Ext.data.Store",
  alias: "store.tickethistory",
  autoLoad: false,
  autoSync: true,
  model: "HistoryEntry",

  requires: ["Urls"],

  proxy: {
    type: "rest",

    headers: {
      authorization: localStorage.getItem("JWT")
    },

    url: Urls.endpoint("/api/ticketHistory"),
    reader: {
      type: "json"
    },
    writer: {
      type: "json"
    }
  }
});
