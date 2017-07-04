Ext.define('Bugtracker.view.main.UserTicketsTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'tickets-tab',

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
		xtype : 'userticketstabinnerpanel'
	} ]
});