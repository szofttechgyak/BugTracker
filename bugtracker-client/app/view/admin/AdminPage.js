Ext.define('Bugtracker.view.main.AdminPage', {
    extend: 'Ext.tab.Panel',
    xtype: 'admin-panel',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Bugtracker.view.main.MainController',
        'Bugtracker.view.main.MainModel'
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
            margin: '10 0',
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