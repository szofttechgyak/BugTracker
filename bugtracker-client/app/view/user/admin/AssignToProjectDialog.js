Ext.define('Bugtracker.view.user.admin.AssignToProjectDialog', {
    extend: 'Ext.window.Window',
    xtype: 'assign-to-project',
	reference : 'form',
	title : 'Assign user to project',
	floating : true,
	centered : true,
	width : 300,
	modal : true,
	
	setUser : function(user) {
		this.user = user;
	},
	
	items : [
			{
				xtype : 'userprojectslist',
				id : 'userprojectslist'
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
								var selectedProject = Ext.getCmp('userprojectslist').selection;
								if (selectedProject === null) {
									Ext.MessageBox.alert('Error', 'No selected project!');
									return;
								} 
								Ext.Ajax.request({
									url : Urls.endpoint("/api/assignToProject?userId="
											+this.up('assign-to-project').user.id
											+"&projectId="+selectedProject.id+"&role=developer"),
									method : 'POST',
									headers: {
										'authorization' : localStorage.getItem("JWT")
									},
									success : function(response) {
										Ext.getCmp('userslist').getStore().load();
										Ext.MessageBox.alert('Ok',
												'User successfully assigned to project!');
									},
									failure : function(response) {
										Ext.MessageBox.alert('Error',
												'Cannot assign user');
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