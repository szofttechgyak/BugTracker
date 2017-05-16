Ext.require(['Ext.data.Model']);

Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
    },{
        name: 'userName',
        type: 'string',
    },{
        name: 'emailAddress',
        type: 'string',
    },{
        name: 'password',
        type: 'string',
    },{
        name: 'admin',
        type: 'boolean',
    }],
		
	proxy: {
        type: 'rest',
        url: 'http://localhost:8080/api/user',
		headers: {
			'authorization' : localStorage.getItem("JWT")
		},
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});