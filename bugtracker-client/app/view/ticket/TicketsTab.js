Ext.define('Bugtracker.view.ticket.TicketsTab', {
    extend: 'Ext.panel.Panel',
	xtype: 'ticketstab',

	requires: ["Ext.button.Button", "Ext.Viewport", "Ext.data.Model", "Urls"],
	
	// controller: "ticket.ticketstabcontroller",
	
	listeners: {
		render: "onRender"
	},

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
				handler : 'showNewTicketDialog'
			}]
	}, {
		xtype : 'ticketstabinnerpanel'
	} ]
});