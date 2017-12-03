Ext.define("Bugtracker.store.LifecycleStore", {
    extend: "Ext.data.Store",
    alias: "store.lifecycle",
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