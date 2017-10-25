Ext.define('Bugtracker.view.ticket.ProjectSelector', {
    extend: 'Ext.form.field.ComboBox',
    xtype: 'projectselector',
    fieldLabel: 'Choose Project',
    queryMode: 'local',
    displayField: 'projectName',
    valueField: 'id',
    renderTo: Ext.getBody()
})