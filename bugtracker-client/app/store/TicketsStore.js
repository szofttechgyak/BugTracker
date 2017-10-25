Ext.define('Bugtracker.store.TicketsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.tickets',
	autoLoad: false,
    autoSync: true,
    model: 'Ticket',

    requires: [
    	'Urls'
    ],

    proxy: {
        type: 'rest',
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: Urls.endpoint('/api/tickets'),
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
