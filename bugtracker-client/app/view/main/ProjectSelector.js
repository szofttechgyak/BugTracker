Ext.define('Bugtracker.view.main.ProjectSelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'projectselector',
    fieldLabel: 'Choose Project',
    queryMode: 'local',
    displayField: 'projectName',
    valueField: 'id',
    store: {
        type: 'userprojects'
    },
    renderTo: Ext.getBody()
})