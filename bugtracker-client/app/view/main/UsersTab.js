Ext.define('Bugtracker.view.main.UsersTab', {
    extend: 'Ext.panel.Panel',
    xtype: 'users-tab',

	requires: [
		'Ext.button.Button',
		'Ext.Viewport'
	],
	
	items: [
	{
		xtype: 'button',
		text: 'Create User',
		handler: function() {
			var dialog = Ext.create('Ext.window.Window',{
		        xtype: 'form',
		        reference: 'form',	        
                title: 'Create User',
                floating: true,
                centered: true,
                width:300,
                modal: true,
                items: [{
                    xtype: 'textfield',
                    name: 'username',
                    fieldLabel: 'Username'
                }, {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'E-mail'
                }, {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password'
                }, {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    items: ['->', {
                        xtype: 'button',
                        text: 'Submit',
                        iconCls: 'x-fa fa-check',
                        handler: function() {
                        	this.up('window').destroy();
                        }
                    }, {
                        xtype: 'button',
                        text: 'Cancel',
                        iconCls: 'x-fa fa-close',
                        handler: function() {
                        	this.up('window').destroy();
                        }
                    }]
                }]
            });
			dialog.show();
		}
	}
	]
});