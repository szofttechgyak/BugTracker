Ext.define('Bugtracker.view.main.UserTicketsTabInnerPanel', {
	extend: 'Ext.tab.Panel',
	xtype: 'userticketstabinnerpanel',
    requires : [ 'Ext.button.Button', 'Ext.Viewport', 'Ext.data.Model' ],
    items: [
        {
            xtype: 'userticketslist', autoScroll: true
        },
        {
            xtype: 'userticketsfilteredlist'
        }
    ]			
});