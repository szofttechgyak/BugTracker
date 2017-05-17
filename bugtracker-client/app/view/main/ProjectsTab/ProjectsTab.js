Ext.define('Bugtracker.view.main.ProjectsTab.Project', {
    extend: 'Ext.panel.Panel',
    xtype: 'projects-tab',

	items: [
		{xtype : 'projects-list', autoScroll: true},
//		{xtype : 'projects-list', flex : 1, margin: '0px 0px 0px 20px'}
	]
});