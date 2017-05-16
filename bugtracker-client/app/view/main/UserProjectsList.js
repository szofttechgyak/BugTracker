Ext.define('Bugtracker.view.main.UserProjectsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userprojectslist',

    title: 'Projects',

    store: {
        type: 'userprojects'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 }
    ],

});