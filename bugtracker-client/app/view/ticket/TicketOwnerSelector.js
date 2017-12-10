Ext.define('Bugtracker.view.ticket.TicketOwnerSelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'ticketownerselector',
    fieldLabel: 'Choose Owner',
    queryMode: 'local',
    displayField: 'userName',
    valueField: 'userName'
})