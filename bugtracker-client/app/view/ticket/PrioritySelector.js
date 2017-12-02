Ext.define('Bugtracker.view.ticket.PrioritySelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'priorityselector',
    fieldLabel: 'Choose Priority',
    queryMode: 'local',
    displayField: 'priority',
    valueField: 'priority',
    store: new Ext.data.Store({
        autoLoad: true,
        fields: ['priority'],
        data: [
            {"priority":"S1"},
            {"priority":"S2"},
            {"priority":"S3"}
            ]
    })
})