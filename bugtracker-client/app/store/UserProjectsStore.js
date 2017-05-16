Ext.define('Bugtracker.store.UserProjectsStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userprojects',
	autoLoad: true,
    autoSync: true,
    model: 'Project',

    fields: [
        'id', 'name'
    ],

    data : [
         {id: 1,    name: 'BugTracker'},
         {id: 2,    name: 'BugTracker Test'}
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
