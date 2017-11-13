Ext.define("Bugtracker.view.project.user.ProjectDetails", {
    extend: "Ext.window.Window",
  
    xtype: "userprojectdetails",
    floating: true,
    width: '80%',
    y: '1%',
    region : 'center',
    requires: [
        'Ext.layout.container.Table'
    ],

    layout: {
        type: 'table',
        columns: 5,
        tdAttrs: { style: 'width: 100%; padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        autoHeight: true,
        bodyPadding: 10
    },

    initComponent: function () {
        var me = this;
        this.items = [
            {
                title: 'Developer',
                html: me.approver
            },
            {
                title: 'Approver',
                html: me.developer
            },
            {
                title: 'S1',
                html: me.s1
            },
            {
                title: 'S2',
                html: me.s2
            },
            {
                title: 'S2',
                html: me.s2
            },
            {
                title: 'Description',
                html: me.description,
                collapsible: true,
                colspan: 5
            },
            {
                title: 'Tickets',
                xtype: 'ticketslist',
                bind: {
                    store: "{Tickets}"
                },
                listeners: {
                    render: "loadTicketsStore"
                },
                width: '100%',
                collapsible: true,
                colspan: 5
            },
        ];

        this.callParent();
    }
  });