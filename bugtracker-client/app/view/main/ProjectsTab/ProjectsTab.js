Ext.define('Bugtracker.view.main.Project', {
    extend: 'Ext.panel.Panel',
    xtype: 'projects-tab',

	layout: {
		type: 'hbox',
		pack: 'start',
		align: 'stretch',
	},
	items: [
		{xtype : 'projects-list', width:'20%',autoScroll: true},
		{xtype : 'projects-list', flex : 1, margin: '0px 0px 0px 20px'}
	]
});