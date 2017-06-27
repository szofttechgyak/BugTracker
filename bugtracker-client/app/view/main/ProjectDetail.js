Ext.define('Bugtracker.view.main.ProjectDetail', {
    extend: 'Ext.Panel',
    xtype: 'projectdetail',
    floating: true,
    centered: true,
    modal: true,
    width: '90%',
	height: '90%',
    
    store: {
        type: 'userprojects'
    },

    items: [
        { text: 'Name', dataIndex: 'projectName', flex: 1},      
        { text: 'Default developer', dataIndex: 'defaultDeveloper', flex: 1},      
        { text: 'Default approver', dataIndex: 'defaultApprover', flex: 1},      
    ],
    
    dockedItems: [{
        xtype: 'toolbar',
        title: 'PopUp',
        items: [{
            text: 'Close',
            handler: function(){
                this.up('projectdetail').destroy();
            }
        }]
    }],
})