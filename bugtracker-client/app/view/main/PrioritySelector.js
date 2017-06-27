Ext.define('Bugtracker.view.main.PrioritySelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'priorityselector',
    fieldLabel: 'Choose User',
    queryMode: 'local',
    displayField: 'priority',
    valueField: 'priority',
    store: new Ext.data.Store({
        autoLoad: true,
        fields: ['priority'],
        data: [
            {"priority":"A"},
            {"priority":"B"},
            {"priority":"C"}
            ]
    }),
    renderTo: Ext.getBody()
})