Ext.define('Bugtracker.view.ticket.TicketStateSelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'ticketstateselector',
    fieldLabel: 'Choose State',
    queryMode: 'local',
    displayField: 'newStatus',
    valueField: 'newStatus',
    listeners: 
    {
        select: 'onStateSelected'
    }
})