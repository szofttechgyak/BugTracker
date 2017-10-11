// This is some magic, because Ext defaults to view.main.Main and I dont know how to disable it
Ext.define('Bugtracker.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main'
});