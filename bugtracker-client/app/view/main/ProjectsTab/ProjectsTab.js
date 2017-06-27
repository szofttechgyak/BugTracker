Ext.define('Bugtracker.view.main.ProjectsTab.ProjectsTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'projects-tab',

	requires : [ 'Ext.button.Button', 'Ext.Viewport', 'Ext.data.Model', 'Bugtracker.view.main.ProjectsTab.ProjectsList',
			'Bugtracker.view.main.ProjectsTab.NewProjectDialog', 'Bugtracker.view.main.ProjectsTab.UpdateProjectDialog', 'Urls' ],

	items : [ {
		layout: {
		    type: 'hbox',
		    pack: 'start',
		    align: 'stretch'
		},
		
		margin: '0px 0px 5px 0px',
		
		items: [ {
				xtype : 'button',
				text : 'Create Project',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var dialog = Ext.create('Bugtracker.view.main.ProjectsTab.NewProjectDialog');
					dialog.show();		
				},
			}, 	{
				xtype : 'button',
				text : 'Delete selected',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var selected = Ext.getCmp('projectslist').selection;
					if (selected === null) {
						Ext.MessageBox.alert('Error', 'No selected project!');
					} else {		
						Ext.Ajax.request({
							url : Urls.endpoint("/api/removeProject/" + selected.id),
							method : 'POST',
							headers: {
								'authorization' : localStorage.getItem("JWT")
							},
							success : function(response) {
								Ext.getCmp('projectslist').getStore().load();
								Ext.MessageBox.alert('Ok',
										'Project successfully deleted!');
							},
							failure : function(response) {
								Ext.MessageBox.alert('Error',
										'Cannot delete project');
							}
						});						
					}
				},
			}, {
				xtype : 'button',
				text : 'Update selected',
				margin: '0px 2px 5px 0px',
				handler : function() {
					var selected = Ext.getCmp('projectslist').selection;
					if (selected === null) {
						Ext.MessageBox.alert('Error', 'No selected project!');
					} else {	
						var dialog = Ext.create('Bugtracker.view.main.ProjectsTab.UpdateProjectDialog');
						dialog.setProject(selected.data);
						dialog.show();
					}
				},
			}
		]
	}, {
		xtype : 'projectslist', autoScroll: true
	} ]
});