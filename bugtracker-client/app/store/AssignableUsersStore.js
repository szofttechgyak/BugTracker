Ext.define("Bugtracker.store.AssignableUsersStore", {
    extend: "Ext.data.Store",
    alias: "store.assignableusers",
    autoLoad: false,
    autoSync: true,
    model: "User",
  
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
  