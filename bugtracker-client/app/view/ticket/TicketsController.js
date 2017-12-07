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
      console.log(element.data);
      this.dialog = view.add({
        xtype: "ticketdetails",
        ticketID : element.data.id,
        title: element.data.ticketName,
        type: element.data.ticketType,
        owner: element.data.owner,
        reporter: element.data.reporter,
        status: element.data.currentStatus,
        project: element.data.project,
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
    },

    loadLifecycleStore: function(userID, ticketID) {
      var endpoint = '/api/getAllowedChanges?userId=' + userID + '&ticketId=' + ticketID;
      console.log(endpoint);
      this.loadStore("TicketLifecycle", Urls.endpoint(endpoint));
    },
  
    loadStore: function(type, url) {
      var store = this.getViewModel().getStore(type);
      var proxy = store.getProxy();
      proxy.headers.authorization = localStorage.getItem("JWT");
      if (url != undefined && url != null) {
        proxy.api.read = url;
      }
      store.setProxy(proxy);
      store.load();
      console.log(store);
    },

    onRenderTicketDetails: function() {
      var userID = localStorage.getItem("id");
      var ticketID = this.dialog.ticketID;
      this.loadLifecycleStore(userID, ticketID);
    },

    onStateSelected: function(combo, record, eOpts) {
      var roleName = record.data.role;
      var projectId = this.lookupReference('project-details-ref').projectId;
      var endpoint = '/api/getUsersInRole/' + projectId + '?role=' + roleName;
      console.log(endpoint);
      this.loadStore("AssignableUsers", Urls.endpoint(endpoint));
    },

    updateTicket: function() {
      var me = this;
      var ticketID = this.dialog.ticketID;
      var newUserID = me.getUserID(Ext.getCmp("ticketowner").getValue());
      console.log(newUserID);
      var newStatus = Ext.getCmp("ticketstate").getValue();
      // {
      //   "owner": {
      //   "id": 27
      //   },
      //   "reporter": {
      //   "id": 27
      //   },
      //   "project": {
      //   "id": 5
      //   },
        
      //   "spentTime": 100,
      //   "currentStatus": "In progress 1"
      //   }
      var ticket = {
        owner: 
        {
          id: newUserID
        },
        currentStatus: newStatus,
        spentTime: 52        
      };
      Ext.Ajax.request({
        url: Urls.endpoint("/api/updateTicket/" + ticketID),
        method: "POST",
        jsonData: ticket,
        headers: {
          authorization: localStorage.getItem("JWT")
        },
        success: function(response) {
          me.loadStore("Tickets", null);
          Ext.MessageBox.alert("Ok", "Ticket successfully updated");
        },
        failure: function(response) {
          console.log(response);
          if (response.status == 401)
          {
            Ext.MessageBox.alert("Error", "Insufficient permissions");
          }
          else
          {
            Ext.MessageBox.alert("Error", "Cannot update ticket");
          }
        }
      });
    },

    getUserID: function(username){
      var _id = null;
      Ext.Ajax.request 
          ({ 
            async: false,
            url: Urls.endpoint('/api/userByUserName/') + username, 
            method: 'GET',    
            
            headers: {
              'authorization' : localStorage.getItem("JWT")
            },
            
            success: function(response) 
            { 
              _id = Ext.decode(response.responseText).id;
            }
          });
      return _id;
    }
  });