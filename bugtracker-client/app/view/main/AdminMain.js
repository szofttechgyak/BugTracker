Ext.define('Bugtracker.view.main.AdminMain', {
    extend: 'Bugtracker.view.main.MainBase',
    xtype: 'admin-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Bugtracker.view.main.AdminMainController',
        'Bugtracker.view.main.AdminMainModel'
    ],

    controller: 'adminmaincontroller',
    viewModel: 'adminmainmodel',

    items: [{
        title: 'Projects',
        iconCls: 'fa-list',
        items: [{
            xtype: 'adminprojectstab',
        }]
    },
	{
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'users-tab'
        }]
    }]
});