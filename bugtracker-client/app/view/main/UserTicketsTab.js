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
		xtype : 'userticketslist', autoScroll: true
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