Ext.define('Bugtracker.view.main.UserMain', {
    extend: 'Bugtracker.view.main.MainBase',
    xtype: 'user-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Bugtracker.view.main.UserMainController',
        'Bugtracker.view.main.UserMainModel'
    ],

    controller: 'usermain',
    viewModel: 'usermain',

    items: [{
        title: 'My Projects',
        iconCls: 'fa-home',
        items: [{
            xtype: 'userprojectslist'
        }]
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{bogus}'
        }
    }]
});