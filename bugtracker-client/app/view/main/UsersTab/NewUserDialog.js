Ext.require(['Bugtracker.view.main.UsersList']);

Ext.define('Bugtracker.view.main.UsersTab.NewUserDialog', {
    extend: 'Ext.window.Window',
    xtype: 'newuser',
	reference : 'form',
	title : 'Create User',
	floating : true,
	centered : true,
	width : 300,
	modal : true,
	items : [
			{
				xtype : 'textfield',
				name : 'username',
				id : 'username',
				fieldLabel : 'Username'
			},
			{
				xtype : 'textfield',
				name : 'email',
				id : 'email',
				fieldLabel : 'E-mail'
			},
			{
				xtype : 'textfield',
				name : 'password',
				id : 'password',
				inputType : 'password',
				fieldLabel : 'Password'
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
									url : Urls.endpoint("/api/addUser"),
									method : 'POST',
									jsonData : user,
									headers: {
										'authorization' : localStorage.getItem("JWT")
									},
									success : function(response) {
										Ext.getCmp('userslist').getStore().load();
										Ext.MessageBox.alert('Ok',
												'User successfully created!');
									},
									failure : function(response) {
										Ext.MessageBox.alert('Error',
												'Cannot create user');
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