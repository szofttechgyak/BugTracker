Ext.define('Bugtracker.view.main.AllTicketsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'allticketslist',

    title: 'Tickets',

    store: {
        type: 'alltickets'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Owner', dataIndex: 'owner', flex: 1 }
    ],

});
