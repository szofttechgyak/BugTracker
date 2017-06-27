Ext.define('Bugtracker.store.AllUsersStore', {
    extend: 'Ext.data.Store',
    alias: 'store.allusers',
	autoLoad: true,
    autoSync: true,
    model: 'User',
    storeId: 'allusersstore',

    requires: [
    	'Urls'
    ],
    
    fields: [
        'id', 'userName', 'emailAddress', 'admin', 'password'
    ],

    proxy: {
        type: 'rest',
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: Urls.endpoint('/api/users'),
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
