Ext.define("Bugtracker.view.ticket.TicketsController", {
    extend: "Ext.app.ViewController",
  
    alias: "controller.ticket.ticketscontroller",

    // showNewTicketDialog: function(button, projId) {
    showNewTicketDialog: function(button, e, args) {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "newticketdialog",
        projectId: button.projId
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
        project: {"id": this.dialog.projectId},
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

    onTicketClick: function(record, element, rowIndex, e, eOpts) {
      var view = this.getView();
      var parent = this.lookupReference('project-details-ref');
      this.dialog = view.add({
        xtype: "ticketdetails",
        projectId : element.data.id,
        title: element.data.ticketName,
        type: element.data.ticketType,
        owner: element.data.owner,
        reporter: element.data.reporter,
        status: element.data.status,
        comment: element.data.comment,
        spentTime: element.data.spentTime,
        description: element.data.ticketDescription,
        parentWindow: parent
      });
      parent.hide();
      this.dialog.show();	
    },

    beforecloseTicketDetails: function(panel, eOpts) {
      panel.parentWindow.show();
    }
  });