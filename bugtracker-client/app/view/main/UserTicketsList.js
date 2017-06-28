Ext.define('Bugtracker.view.main.UserTicketsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userticketslist',
    height : Ext.getBody().getViewSize().height,

    title: 'Tickets',

    store: {
        type: 'alltickets'
    },

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
//        defaults: {
//            layout: {
//                align: 'left'
//            } 
//        }
    }

});