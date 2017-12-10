Ext.define('Bugtracker.view.main.UserMain', {
    extend: 'Bugtracker.view.main.MainBase',
    xtype: 'user-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Bugtracker.view.main.UserMainController',
        'Bugtracker.view.main.UserMainModel'
    ],

    controller: 'usermaincontroller',
    viewModel: 'usermainmodel',

    items: [{
        title: 'My Projects',
        iconCls: 'fa-newspaper-o',
        items: [{
            xtype: 'userprojectstab'
        }]
    }, 
    // {
    //     title: 'Tickets',
    //     iconCls: 'fa-ticket',
    //     items: [{
    //         xtype: 'ticketstab'
    //     }]
    // }, 
    {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{bogus}'
        }
    }]
});