Ext.define('Bugtracker.view.ticket.NewTicketDialog', {
    extend: 'Ext.window.Window',
    xtype: 'newticketdialog',
	reference : 'form',
	title : 'Create Ticket',
	floating : true,
	centered : true,
	width : 300,
	modal : true,
	items : [
            {
				xtype : 'textfield',
				name : 'ticketname',
				id : 'ticketname',
				fieldLabel : 'Ticket name'
			},
			{
				xtype : 'textfield',
				name : 'ticketdescription',
				id : 'ticketdescription',
				fieldLabel : 'Ticket description'
			},
			{
				xtype : 'tickettypeselector',
				name : 'tickettype',
				id : 'tickettype',
				fieldLabel : 'Ticket type'
			},
			// {
			// 	xtype : 'projectselector',
			// 	name : 'project',
			// 	id : 'project',
			// 	fieldLabel : 'Project',
			// 	bind: {
			// 	  store: "{Projects}"
			// 	}
			// },
			{
				xtype : 'priorityselector',
				name : 'priority',
				id : 'priority',
				fieldLabel : 'Priority'
			},
			{
				xtype : 'toolbar',
				docked : 'bottom',
				items : [
						'->',
						{
							xtype : 'button',
							text : 'Submit',
							iconCls : 'x-fa fa-check',
							formBind : true,
							handler : 'createNewTicket'
						}, {
							xtype : 'button',
							text : 'Cancel',
							iconCls : 'x-fa fa-close',
							handler : function() {
								this.up('window').destroy();
							}
						} ]
			} ],
	
	initComponent: function () {
		this.callParent();
	}
});