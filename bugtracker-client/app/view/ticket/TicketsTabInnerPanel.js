Ext.define('Bugtracker.view.ticket.TicketsTabInnerPanel', {
	extend: 'Ext.tab.Panel',
	xtype: 'ticketstabinnerpanel',
    requires : [ 'Ext.button.Button', 'Ext.Viewport', 'Ext.data.Model' ],
    items: [
        {
            xtype: 'ticketslist', autoScroll: true,
            bind: {
                store: "{Tickets}"
            }
        },
        {
            xtype: 'ticketsfilteredlist',
            bind: {
                store: "{Tickets}"
            }
        }
    ]			
});