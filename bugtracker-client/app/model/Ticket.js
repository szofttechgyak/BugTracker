Ext.require(['Ext.data.Model']);

Ext.define('Ticket', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
    },{
        name: 'ticketName',
        type: 'string',
    },{
        name: 'ticketType',
        type: 'string',
    },{
        name: 'owner',
        type: 'auto',
        mapping: 'owner.userName'
    },{
        name: 'reporter',
        type: 'auto',
        mapping: 'reporter.userName'
    },{
        name: 'project',
        type: 'auto',
        mapping: 'project.projectName'
    },{
        name: 'priority',
        type: 'string',
    },{
        name: 'spentTime',
        type: 'int',
    },{
        name: 'ticketDescription',
        type: 'string',
    },{
        name: 'status',
        type: 'auto'
    },{
        name: 'comment',
        type: 'auto'
    }]
});