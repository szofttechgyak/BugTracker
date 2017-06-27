Ext.require(['Bugtracker.view.main.UsersTab.UsersList']);

Ext.define('Bugtracker.view.main.UsersTab.UpdateUserDialog', {
    extend: 'Ext.window.Window',
    xtype: 'updateuser',
	reference : 'form',
	title : 'Update User',
	floating : true,
	centered : true,
	width : 300,
	modal : true,
		
	setUser : function(user) {
		this.userID = user.id;
		Ext.getCmp("username").setValue(user.userName);
		Ext.getCmp("email").setValue(user.emailAddress);
		Ext.getCmp("password").setValue(user.password);
	},
	
	items : [
			{
				xtype : 'textfield',
				name : 'username',
				id : 'username',
				fieldLabel : 'Username',
			},
			{
				xtype : 'textfield',
				name : 'email',
				id : 'email',
				fieldLabel : 'E-mail',
			},
			{
				xtype : 'textfield',
				name : 'password',
				id : 'password',
				fieldLabel : 'Password',
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
								var user = {
									userName : Ext.getCmp("username")
											.getValue(),
									emailAddress : Ext.getCmp("email")
											.getValue(),
									password : Ext.getCmp("password")
											.getValue(),
									admin : false
								};

								Ext.Ajax.request({
									url : Urls.endpoint("/api/updateUser/" + this.up('updateuser').userID),
									method : 'POST',
									jsonData : user,
									headers: {
										'authorization' : localStorage.getItem("JWT")
									},
									success : function(response) {
										Ext.getCmp('userslist').getStore().load();
										Ext.MessageBox.alert('Ok',
												'User successfully updated!');
									},
									failure : function(response) {
										Ext.MessageBox.alert('Error',
												'Cannot update user!');
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