Ext.define('Bugtracker.store.UserProjectsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userprojects',
	autoLoad: true,
    autoSync: true,
    model: 'Project',

    proxy: {
        type: 'rest',
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: 'http://157.181.161.108:8080/api/projects',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
