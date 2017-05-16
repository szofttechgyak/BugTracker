Ext.define('Bugtracker.view.main.Main', {
    extend: 'Bugtracker.view.main.MainBase',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Bugtracker.view.main.MainController',
        'Bugtracker.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    items: [{
        title: 'All Tickets',
        iconCls: 'fa-home',
        items: [{
            xtype: 'allticketslist'
        }]
    }, {
        title: 'Single Ticket',
        iconCls: 'fa-home',
        items: [{
            xtype: 'singleticket'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});