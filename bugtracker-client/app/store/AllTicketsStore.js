Ext.define('Bugtracker.store.AllTicketsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.alltickets',
	autoLoad: true,
    autoSync: true,
    model: 'Ticket',
    storeId: 'allticketsstore',

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
