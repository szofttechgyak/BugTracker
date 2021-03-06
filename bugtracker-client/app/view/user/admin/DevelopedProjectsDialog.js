Ext.define('Bugtracker.view.user.admin.DevelopedProjectsDialog', {
    extend: 'Ext.window.Window',
    xtype: 'developed-projects',
	reference : 'form',
	title : 'Developed projects',
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
	]
});