Ext.define("Bugtracker.view.ticket.TicketDetails", {
    extend: "Ext.window.Window",

    xtype: "ticketdetails",
    floating: true,
    draggable: false,
    centered: true,
    width: '70%',
    y: 50,
    modal: true,
    requires: [
        'Ext.layout.container.Table'
    ],

    layout: {
        type: 'table',
        columns: 5,
        tdAttrs: { style: 'padding: 5px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        autoHeight: false,
        bodyPadding: 5
    },

    listeners: {
        beforerender: 'onRenderTicketDetails',
        beforeclose: 'beforecloseTicketDetails'
    },

    initComponent: function () {
        var me = this;
        this.items = [
            {
                title: 'Reporter',
                html: me.reporter
            },
            {
                title: 'Owner',
                html: me.owner,
                id: 'owner'
            },
            {
                title: 'Type',
                html: me.type
            },
            {
                title: 'Status',
                html: me.status,
                id: 'status'
            },
            {
                title: 'Spent time',
                html: me.spentTime,
                id: 'currentspenttime'
            },
            {
                title: 'Description',
                html: me.description,
                collapsible: true,
                colspan: 5
            },
            {
                xtype: "button",
                text: "Add comment",
                margin: "0px 2px 5px 0px",
                handler: "showNewCommentDialog",
                colspan: 5
            },
            {
        				xtype : 'form',
        				title : 'Manage ticket',
                margin: '0px 2px 5px 0px',
                width: '100%',
                colspan: 5,
                items:
                [
                    {
                        xtype : 'ticketstateselector',
                        name : 'ticketstate',
                        id : 'ticketstate',
                        fieldLabel : 'Ticket state',
                        allowBlank: false,
                        bind: {
                            store: "{TicketLifecycle}"
                        }
                    },
                    {
                        xtype : 'ticketownerselector',
                        name : 'ticketowner',
                        id : 'ticketowner',
                        fieldLabel : 'Ticket owner',
                        allowBlank: false,
                        bind: {
                            store: "{AssignableUsers}"
                        }
                    },
                    {
                        xtype: "numberfield",
                        name: "Time spent on ticket",
                        id: "spentTimeField",
                        fieldLabel: "Spent time",
                        minvalue: 0,
                        allowBlank: false,
                        blankText: 'Set time',
                        emptyText : 'in hours'
                    },
                    {
                        xtype : 'toolbar',
                        docked : 'bottom',
                        items :
                        [
                            '->',
                            {
                                xtype : 'button',
                                text : 'Submit',
                                iconCls : 'x-fa fa-check',
                                formBind : true,
                                handler : 'updateTicket'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Comments',
                xtype: 'commentslist',
                id: 'commentslist-id',
                bind: {
                    store: "{Comments}"
                },
                listeners: {
                    render: "loadTicketComments"
                },
                width: '100%',
                collapsible: true,
                colspan: 5
            }
            // {
			// 	xtype : 'button',
			// 	text : 'Create Ticket',
			// 	margin: '0px 2px 5px 0px',
            //     handler : 'showNewTicketDialog',
            //     projId : me.projectId
			// },
            // {
            //     xtype: "button",
            //     text: "Show ticket history",
            //     margin: "0px 2px 5px 0px",
            //     handler: "showTicketHistoryDialog",
            //     colspan: 5
            // },
            // {
            //     title: 'Tickets',
            //     xtype: 'ticketslist',
            //     id: 'ticketslist-id',
            //     bind: {
            //         store: "{Tickets}"
            //     },
            //     listeners: {
            //         render: "loadTicketsStore"
            //     },
            //     width: '100%',
            //     collapsible: true,
            //     colspan: 5
            // },
        ];

        this.callParent();
    }
  });
