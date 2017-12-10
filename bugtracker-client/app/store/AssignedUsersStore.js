Ext.define("Bugtracker.store.AssignedUsersStore", {
    extend: "Ext.data.Store",
    alias: "store.assignedusers",
    autoLoad: false,
    autoSync: true,
    model: "AssignedUsers",
  
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
  