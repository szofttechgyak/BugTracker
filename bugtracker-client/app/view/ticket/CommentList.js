Ext.define('Bugtracker.view.ticket.CommentsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'commentslist',
    title: 'Comments',
    maxHeight: '400',
    autoScroll: true,
    columns: {
        items: [
            { text: 'Owner', dataIndex: 'commentOwner', flex: 1, align : 'center' },
            { text: 'Comment', dataIndex: 'commentText', flex: 5, align : 'center' }
        ],
    },
    listeners: {
        activate: 'clearFiltering'
    }
});
