Ext.define('Bugtracker.view.main.ProjectList', {
    extend: 'Ext.grid.Panel',
    xtype: 'projects-list',
    title: 'Projects',
	height: Ext.getBody().getViewSize().height,
	
	listeners: {
		itemclick: function(e) {
			console.log(e.selection.data);
		}
	},
	
    store: {
		data : [
			{name: 'Peter', kecske:'igen'},
			{name: 'Kati', kecske:'nem'},
		]
	},

    columns: [
        { text: 'Name', dataIndex: 'name', flex : 1, align: 'center'}
    ],

});
