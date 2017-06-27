Ext.define('Bugtracker.view.main.UserProjectsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userprojectslist',

    title: 'Projects',

    store: {
        type: 'userprojects'
    },

    columns: {
        items: [
            { text: 'Name', dataIndex: 'projectName', flex: 1},      
            { text: 'Default developer', dataIndex: 'defaultDeveloper', flex: 1},      
            { text: 'Default approver', dataIndex: 'defaultApprover', flex: 1},      
        ],
//        defaults: {
//            layout: {
//                align: 'left'
//            } 
//        }
    },

    listeners: {
		    'cellclick': 'onItemSelected'
		}

});