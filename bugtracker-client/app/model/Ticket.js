Ext.require(['Ext.data.Model']);

Ext.define('Ticket', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
    },{
        name: 'name',
        type: 'string',
    },{
        name: 'owner',
        type: 'string',
    }],
		
	proxy: {
        type: 'rest',
        url: 'http://localhost:8080/api/ticket',
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