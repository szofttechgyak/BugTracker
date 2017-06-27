Ext.require(['Bugtracker.view.main.ProjectsTab.ProjectsList']);
Ext.require(['Bugtracker.view.main.UsersTab.UsersList']);

Ext.define('Bugtracker.view.main.ProjectsTab.NewProjectDialog', {
    extend: 'Ext.window.Window',
    xtype: 'newproject',
	reference : 'form',
	title : 'Create Project',
	floating : true,
	centered : true,
	width : 300,
	modal : true,
	items : [
			{
				xtype : 'textfield',
				name : 'projectname',
				id : 'projectname',
				fieldLabel : 'Project name'
			},
			{
				xtype : 'textfield',
				name : 'description',
				id : 'description',
				fieldLabel : 'Description'
			},
			{
				xtype : 'userselector',
				name : 'defaultapprover',
				id : 'defaultapprover',
				fieldLabel : 'Default approver'
			},
            {
				xtype : 'userselector',
				name : 'defaultdeveloper',
				id : 'defaultdeveloper',
				fieldLabel : 'Default developer'
			},
            {
				xtype : 'numberfield',
				name : 's1time',
				id : 's1time',
				fieldLabel : 'S1 time'
			},
            {
				xtype : 'numberfield',
				name : 's2time',
				id : 's2time',
				fieldLabel : 'S2 time'
			},
            {
				xtype : 'numberfield',
				name : 's3time',
				id : 's3time',
				fieldLabel : 'S3 time'
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
								var project = {
									projectName : Ext.getCmp("projectname")
											.getValue(),
									projectDescription : Ext.getCmp("description")
											.getValue(),
									defaultApprover : Ext.getCmp('userslist').getStore().findRecord('id',Ext.getCmp("defaultapprover")
											.getValue()).data,
                                    defaultDeveloper : Ext.getCmp('userslist').getStore().findRecord('id',Ext.getCmp("defaultdeveloper")
											.getValue()).data,
                                    s1Time : Ext.getCmp("s1time")
											.getValue(),
                                    s2Time : Ext.getCmp("s2time")
											.getValue(),
                                    s3Time : Ext.getCmp("s3time")
											.getValue(),
								};

								Ext.Ajax.request({
									url : Urls.endpoint("/api/addProject"),
									method : 'POST',
									jsonData : project,
									headers: {
										'authorization' : localStorage.getItem("JWT")
									},
									success : function(response) {
										Ext.getCmp('projectslist').getStore().load();
										Ext.MessageBox.alert('Ok',
												'Project successfully created!');
									},
									failure : function(response) {
										Ext.MessageBox.alert('Error',
												'Cannot create project');
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