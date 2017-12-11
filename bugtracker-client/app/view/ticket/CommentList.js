Ext.define('Bugtracker.view.ticket.CommentsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'commentslist',
    title: 'Comments',
    maxHeight: '400',
    autoScroll: true,
    columns: {
        items: [
            { text: 'Owner', dataIndex: 'owner', flex: 1, align : 'center' },
            { text: 'Comment', dataIndex: 'description', flex: 5, align : 'left', cellWrap: true },
            { text: 'Date', dataIndex: 'date', flex: 1, align : 'center' },
        ],
    }
});
