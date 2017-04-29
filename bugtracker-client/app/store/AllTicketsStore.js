Ext.define('Bugtracker.store.AllTicketsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.alltickets',
	autoLoad: true,
    autoSync: true,
    model: 'Ticket',

    fields: [
        'id', 'name', 'owner'
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/tickets',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
