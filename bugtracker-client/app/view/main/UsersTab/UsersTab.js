Ext.define('Bugtracker.view.main.UsersTab.UsersTab', {
	extend : 'Ext.panel.Panel',
	xtype : 'users-tab',

	requires : [ 'Ext.button.Button', 'Ext.Viewport', 'Ext.data.Model', 'Bugtracker.view.main.UsersList',
			'Bugtracker.view.main.UsersTab.NewUserDialog', 'Bugtracker.view.main.UsersTab.UpdateUserDialog', 'Urls' ],

	items : [ {
		layout: {
		    type: 'hbox',
		    pack: 'start',
		    align: 'stretch'
		},
		
		margin: '0px 0px 5px 0px',
		
		items: [ {
				xtype : 'button',
				text : 'Create User',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var dialog = Ext.create('Bugtracker.view.main.UsersTab.NewUserDialog');
					dialog.show();		
				},
			}, 	{
				xtype : 'button',
				text : 'Delete selected',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var selected = Ext.getCmp('userslist').selection;
					if (selected === null) {
						Ext.MessageBox.alert('Error', 'No selected user!');
					} else {		
						Ext.Ajax.request({
							url : Urls.endpoint("/api/removeUser/" + selected.id),
							method : 'POST',
							headers: {
								'authorization' : localStorage.getItem("JWT")
							},
							success : function(response) {
								Ext.getCmp('userslist').getStore().load();
								Ext.MessageBox.alert('Ok',
										'User successfully deleted!');
							},
							failure : function(response) {
								Ext.MessageBox.alert('Error',
										'Cannot delete user');
							}
						});						
					}
				},
			}, {
				xtype : 'button',
				text : 'Update selected',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var selected = Ext.getCmp('userslist').selection;
					if (selected === null) {
						Ext.MessageBox.alert('Error', 'No selected user!');
					} else {	
						var dialog = Ext.create('Bugtracker.view.main.UsersTab.UpdateUserDialog');
						dialog.setUser(selected.data);
						dialog.show();
					}
				},
			}, {
				xtype : 'button',
				text : 'Assign to project',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var selected = Ext.getCmp('userslist').selection;
					if (selected === null) {
						Ext.MessageBox.alert('Error', 'No selected user!');
					} else {	
						var dialog = Ext.create('Bugtracker.view.main.UsersTab.AssignToProjectDialog');
						dialog.setUser(selected.data);
						dialog.show();	
					}
				},
			}
		]
	}, {
		xtype : 'userslist'
	} ]
});