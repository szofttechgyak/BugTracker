Ext.define('Bugtracker.view.project.admin.UpdateProjectDialog', {
    extend: 'Ext.window.Window',
    xtype: 'updateprojectdialog',
	reference : 'form',
	title : 'Update Project',
	floating : true,
	centered : true,
	width : 300,
	modal : true,
		
	setProject : function(project) {
		this.projectID = project.id;
		Ext.getCmp("projectname").setValue(project.projectName);
		Ext.getCmp("description").setValue(project.projectDescription);
		Ext.getCmp("defaultapprover").setValue(Ext.getCmp('userslist').getStore().findRecord('userName',project.defaultApprover).data.id);
		Ext.getCmp("defaultdeveloper").setValue(Ext.getCmp('userslist').getStore().findRecord('userName',project.defaultDeveloper).data.id);
		Ext.getCmp("s1time").setValue(project.s1Time);
		Ext.getCmp("s2time").setValue(project.s2Time);
		Ext.getCmp("s3time").setValue(project.s3Time);
	},
	
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
							handler : 'updateProject'
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