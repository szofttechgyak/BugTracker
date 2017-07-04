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
    }]
});