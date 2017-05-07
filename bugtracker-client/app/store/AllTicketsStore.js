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
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: 'http://localhost:8080/api/tickets',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
