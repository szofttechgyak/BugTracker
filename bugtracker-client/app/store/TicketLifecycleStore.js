Ext.define("Bugtracker.store.TicketLifecycle", {
    extend: "Ext.data.Store",
    alias: "store.ticketlifecycle",
    autoLoad: false,
    autoSync: true,
    model: "TicketState",
  
    requires: ["Urls"],
  
    proxy: {
      type: "rest",
  
      headers: {
        authorization: localStorage.getItem("JWT")
      },
  
      url: '',
      reader: {
        type: "json"
      },
      writer: {
        type: "json"
      }
    }
  });