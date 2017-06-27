Ext.define('Bugtracker.view.main.ProjectsTab.UserSelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'userselector',
    fieldLabel: 'Choose User',
    queryMode: 'local',
    displayField: 'userName',
    valueField: 'id',
    store: {
        type: 'allusers'
    },
    renderTo: Ext.getBody()
})