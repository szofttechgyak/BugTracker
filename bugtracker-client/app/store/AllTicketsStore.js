Ext.define('Bugtracker.store.AllTicketsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.alltickets',
	autoLoad: true,
    autoSync: true,
    model: 'Ticket',

    proxy: {
        type: 'rest',
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: 'http://157.181.161.108:8080/api/tickets',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
