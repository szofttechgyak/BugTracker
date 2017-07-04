Ext.define('Bugtracker.store.UserProjectsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userprojects',
	autoLoad: true,
    autoSync: true,
    model: 'Project',
    storeId: 'userprojectsstore',

    requires: [
    	'Urls'
    ],

    proxy: {
        type: 'rest',
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: Urls.endpoint('/api/projects'),
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
