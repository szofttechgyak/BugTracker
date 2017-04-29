Ext.define('Bugtracker.view.main.SingleTicket', {
    extend: 'Ext.panel.Panel',
    xtype: 'singleticket',
    title: 'Single ticket',
    bodyPadding: 10,

    requires: [
        'Ext.data.Store',
        'Ext.data.Model'
    ],

    items: [{
        xtype: 'textfield',
        width: 450,
        id: 'ticketid',
        name: 'ticketid',
        fieldLabel: 'Ticket ID',
    }, {
        xtype: 'button',
        text: 'Get',
        listeners: {
            click: function(e) {
                Ticket.load(Ext.getCmp('ticketid').getValue(), {
                    success: function(ticket) {
                        Ext.getCmp('queryresult').setValue('id=' + ticket.get('id') + ', name=' + ticket.get('name') + ', owner=' + ticket.get('owner'));
                    },
                    failure: function() {
                        Ext.getCmp('queryresult').setValue("Error: not found");
                    }
                });
            }
        }
    }, {
        xtype: 'textfield',
        width: 450,
        id: 'queryresult',
        name: 'queryresult',
        fieldLabel: 'Result',
    }],
});