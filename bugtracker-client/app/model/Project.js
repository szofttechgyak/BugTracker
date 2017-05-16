Ext.require(['Ext.data.Model']);

Ext.define('Project', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
    },{
        name: 'name',
        type: 'string',
    },{
        name: 'default_approver',
        type: 'auto'
    },{
        name: 'default_developer',
        type: 'auto'
    },{
        name: 's1',
        type: 'int'
    },{
        name: 's2',
        type: 'int'
    },{
        name: 's3',
        type: 'int'
    },{
        name: 'tickets',
        type: 'auto'
    },{
        name: 'history',
        type: 'auto'
    }]
});