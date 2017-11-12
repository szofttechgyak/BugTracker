Ext.define('Bugtracker.view.ticket.TicketsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'ticketslist',
    title: 'Tickets',
    maxHeight: '400',
    autoScroll: true,
    columns: {
        items: [
            { text: 'Name', dataIndex: 'ticketName', flex: 1, align : 'center'},      
            { text: 'Type', dataIndex: 'ticketType', flex: 1, align : 'center'},      
            { text: 'Description', dataIndex: 'ticketDescription', flex: 1, align : 'center'},      
            { text: 'Owner', dataIndex: 'owner', flex: 1, align : 'center'},      
            { text: 'Reporter', dataIndex: 'reporter', flex: 1, align : 'center'},      
            { text: 'Project', dataIndex: 'project', flex: 1, align : 'center'},      
            { text: 'Priority', dataIndex: 'priority', flex: 1, align : 'center'},      
            { text: 'Spent Time', dataIndex: 'spentTime', flex: 1, align : 'center'}    
        ],
    },
    listeners: {
        activate: 'clearFiltering'
    }
});