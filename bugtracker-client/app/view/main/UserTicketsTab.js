Ext.require(['Bugtracker.view.main.UsersTab.UsersList']);
Ext.define('Bugtracker.view.main.UserTicketsTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'tickets-tab',

	requires : [ 'Ext.button.Button', 'Ext.Viewport', 'Ext.data.Model', 'Bugtracker.view.main.UserTicketsList', 'Bugtracker.view.main.UsersTab.UsersList', 'Bugtracker.view.main.ProjectsTab.ProjectsList',
			'Bugtracker.view.main.NewTicketDialog', 'Urls' ],

	items : [ {
		layout: {
		    type: 'hbox',
		    pack: 'start',
		    align: 'stretch'
		},
		
		margin: '0px 0px 5px 0px',
		
		items: [ {
				xtype : 'button',
				text : 'Create Ticket',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var dialog = Ext.create('Bugtracker.view.main.NewTicketDialog');
					dialog.show();		
				},
			}]
	}, {
		xtype : Ext.create('Ext.tab.Panel', {
			items: [
				{
					xtype: 'userticketslist', autoScroll: true,
				},
				{
					xtype: Ext.create('Bugtracker.view.main.UserTicketsList', {
						store: Ext.create('Bugtracker.store.AllTicketsStore', {
								proxy: {
									url: 'http://157.181.161.108:8080/api/tickets'
								}
							}),
						listeners: {
							beforerender: function(){
								this.getStore().getProxy().setUrl('http://157.181.161.108:8080/api/ticketByUser/' + Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data.id);
								this.getStore().load();
							}
						}
					})
				}
			]			
		})
	} ],

	listeners: {       
        /**
         * Beforerender event used to translate labels of component
         */
        beforerender: function(component, eOpts){
            Ext.create('Bugtracker.store.AllUsersStore');
            Ext.create('Bugtracker.store.UserProjectsStore');
        }
    }
});