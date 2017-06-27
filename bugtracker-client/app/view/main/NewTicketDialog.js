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
				xtype : 'projectselector',
				name : 'projectname',
				id : 'projectname',
				fieldLabel : 'Project name'
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
								console.log(localStorage.getItem("username"))
								console.log(Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")))
								var ticket = {
									ticketName : Ext.getCmp("ticketname")
											.getValue(),
									owner : Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data,
									reporter : Ext.getStore('allusersstore').findRecord('userName',localStorage.getItem("username")).data,
                                    projectName : Ext.getStore('userprojectsstore').findRecord('id',Ext.getCmp("projectname")
											.getValue()).data,
                                    priority : Ext.getCmp("priority").getValue(),
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