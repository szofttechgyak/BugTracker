Ext.define('Bugtracker.view.main.TicketTypeSelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'tickettypeselector',
    fieldLabel: 'Choose Type',
    queryMode: 'local',
    displayField: 'type',
    valueField: 'type',
    store: new Ext.data.Store({
        autoLoad: true,
        fields: ['type'],
        data: [
            {"type":"Bug"},
            {"type":"Feature request"}
            ]
    }),
    renderTo: Ext.getBody()
})