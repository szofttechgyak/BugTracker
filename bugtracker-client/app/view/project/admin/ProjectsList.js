Ext.define('Bugtracker.view.project.admin.ProjectsList', {
	extend : 'Ext.grid.Panel',
	xtype : 'projectslist',
	id: 'projectslist',
	title : 'Projects',
	// height : Ext.getBody().getViewSize().height,
	autoScroll: true,

	listeners : {
		itemclick : function(e) {
			console.log(e.selection.data);
		}
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
	}, {
		text : 'Default developer',
		dataIndex : 'defaultDeveloper',
		flex : 1,
		align : 'center'
	}, {
		text : 'Default approver',
		dataIndex : 'defaultApprover',
		flex : 1,
		align : 'center'
	} ],

});
