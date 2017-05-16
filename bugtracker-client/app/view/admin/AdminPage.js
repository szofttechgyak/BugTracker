Ext.define('Bugtracker.view.admin.AdminPage', {
    extend: 'Ext.tab.Panel',
    xtype: 'admin-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
            xtype: 'button',
            text: 'Logout',
            handler: 'onLogoutClicked'
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Projects',
        iconCls: 'fa-list',
        items: [{
            xtype: 'projects-tab',
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