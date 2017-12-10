Ext.define("AssignedUsers", {
  extend: "Ext.data.Model",
  fields: [
    {
      name: "roleName",
      type: "string"
    },
    {
      name: 'users',
      type: "string",
      convert: function(value, record) {
        var names = "";
        for(var i = 0; i < value.length; ++i) {
          if (i > 0) {
            names = names + ",";
          }

          names = names + value[i].userName;
        }
        return names; 
      }
    },
  ]
});
