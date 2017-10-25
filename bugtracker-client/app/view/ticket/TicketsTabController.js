Ext.define("Bugtracker.view.ticket.TicketsTabController", {
    extend: "Ext.app.ViewController",
  
    alias: "controller.ticket.ticketstabcontroller",

    showNewTicketDialog: function() {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "newticketdialog"
      });
      this.dialog.show();	
    },

    createNewTicket: function() {
      // console.log(Ext.getStore('allusers').findRecord('userName',localStorage.getItem("username")).data)
      var me = this;
      var ticket = {
        ticketName : Ext.getCmp("ticketname").getValue(),
        ticketType : Ext.getCmp("tickettype").getValue(),
        owner: {"id": localStorage.getItem("id")},
        reporter: {"id": localStorage.getItem("id")},
        project: {"id": Ext.getCmp("project").getValue()},
        // owner : Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data,
        // reporter : Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data,
                          // projectName : Ext.getStore('userprojectsstore').findRecord('id',Ext.getCmp("projectname").getValue()).data,
        priority : Ext.getCmp("priority").getValue(),
        spentTime: 0,
        ticketDescription : Ext.getCmp("ticketdescription").getValue(),
      };

      Ext.Ajax.request({
        url : Urls.endpoint("/api/addTicket"),
        method : 'POST',
        jsonData : ticket,
        headers: {
          'authorization' : localStorage.getItem("JWT")
        },
        success : function(response) {
          me.loadStore("Tickets");
          Ext.MessageBox.alert('Ok',
              'Ticket successfully created!');
        },
        failure : function(response) {
          Ext.MessageBox.alert('Error',
              'Cannot create ticket');
        }
      });
      this.dialog.destroy();
    },
  
    onRender: function() {
      this.loadTicketStore();
      this.loadProjectStore();
    },
  
    loadTicketStore: function(panel, eOpts) {
      this.loadStore("Tickets");
    },

    loadProjectStore: function(panel, eOpts) {
      this.loadStore("Projects");
    },
  
    loadStore: function(type) {
      var store = this.getViewModel().getStore(type);
      var proxy = store.getProxy();
      proxy.headers.authorization = localStorage.getItem("JWT");
      store.setProxy(proxy);
      store.load();
    },

    clearFiltering: function()
    {
      var store = this.getViewModel().getStore("Tickets");
      store.clearFilter();
    },

    filterStore: function()
    {
      var store = this.getViewModel().getStore("Tickets");
      store.filter('reporter', localStorage.getItem('username'));
    }
  });