Ext.define('Bugtracker.view.ticket.NewTicketDialog', {
    extend: 'Ext.window.Window',
    xtype: 'newticketdialog',
	title : 'Create Ticket',
	floating : true,
	centered : true,
	y : '20%',
	width : 300,
	modal : true,
	items : 
	[
		{
			xtype: 'form',
			items: 
			[
				{
					xtype : 'textfield',
					name : 'ticketname',
					id : 'ticketname',
					fieldLabel : 'Ticket name',
					allowBlank: false,
					maxLength: 30
				},
				{
					xtype : 'textfield',
					name : 'ticketdescription',
					id : 'ticketdescription',
					fieldLabel : 'Ticket description',
					maxLength: 250,
					height: 50
				},
				{
					xtype : 'tickettypeselector',
					name : 'tickettype',
					id : 'tickettype',
					fieldLabel : 'Ticket type',
					allowBlank: false
				},
				{
					xtype : 'priorityselector',
					name : 'priority',
					id : 'priority',
					fieldLabel : 'Priority',
					allowBlank: false
				},
				{
					xtype : 'toolbar',
					docked : 'bottom',
					items : 
					[
						'->',
						{
							xtype : 'button',
							text : 'Submit',
							iconCls : 'x-fa fa-check',
							formBind : true,
							handler : 'createNewTicket'
						}, 
						{
							xtype : 'button',
							text : 'Cancel',
							iconCls : 'x-fa fa-close',
							handler : function() {
								this.up('window').destroy();
							}
						} 
					]
				} 
			]
		}
	],
	
	initComponent: function () {
		this.callParent();
	}
});