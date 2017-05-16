Ext.define('Bugtracker.store.UserProjectsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userprojects',
	autoLoad: true,
    autoSync: true,
    model: 'Project',

    fields: [
        'id', 'projectName'
    ],
    proxy: {
        type: 'rest',
		
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
		
        url: 'http://localhost:8080/api/projects',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});
