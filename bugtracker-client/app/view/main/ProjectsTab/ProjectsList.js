Ext.define('Bugtracker.view.main.ProjectsTab.ProjectsList', {
	extend : 'Ext.grid.Panel',
	xtype : 'projects-list',
	title : 'Projects',
	height : Ext.getBody().getViewSize().height,

	listeners : {
		itemclick : function(e) {
			console.log(e.selection.data);
		}
	},

	store : {
		type : 'userprojects'
	},

	columns : [ {
		text : 'Name',
		dataIndex : 'projectName',
		flex : 1,
		align : 'center'
	}, {
		text : 'S1 Time',
		dataIndex : 's1Time',
		flex : 1,
		align : 'center'
	}, {
		text : 'S2 Time',
		dataIndex : 's2Time',
		flex : 1,
		align : 'center'
	}, {
		text : 'S3 Time',
		dataIndex : 's3Time',
		flex : 1,
		align : 'center'
	} ],

});
