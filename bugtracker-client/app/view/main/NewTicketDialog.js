Ext.require(['Bugtracker.view.main.ProjectsTab.ProjectsList']);
Ext.require(['Bugtracker.view.main.UsersTab.UsersList']);
Ext.require(['Bugtracker.view.main.UserTicketsList']);

Ext.define('Bugtracker.view.main.NewTicketDialog', {
    extend: 'Ext.window.Window',
    xtype: 'newticket',
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
			{
				xtype : 'projectselector',
				name : 'project',
				id : 'project',
				fieldLabel : 'Project'
			},
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
							handler : function() {
								console.log(Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data)
								var ticket = {
									ticketName : Ext.getCmp("ticketname").getValue(),
									ticketType : Ext.getCmp("tickettype").getValue(),
									owner: {"id": Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data.id},
									reporter: {"id": Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data.id},
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
										Ext.getCmp('userticketslist').getStore().load();
										Ext.MessageBox.alert('Ok',
												'Ticket successfully created!');
									},
									failure : function(response) {
										Ext.MessageBox.alert('Error',
												'Cannot create ticket');
									}
								});
								this.up('window').destroy();
							}
						}, {
							xtype : 'button',
							text : 'Cancel',
							iconCls : 'x-fa fa-close',
							handler : function() {
								this.up('window').destroy();
							}
						} ]
			} ]
});