Ext.define('Bugtracker.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Bugtracker.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,
	draggable: false,
    resizable: false,
    defaultButton: 'loginButton',

    items: {
        xtype: 'form',
        reference: 'form',
		resizeable: false,
        items: [{
            xtype: 'textfield',
            name: 'username',
			id: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
			id: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
			name: 'displayfield',
			id: 'displayfield',
            hideEmptyLabel: true,
            value: ''
        }],
        buttons: [{
            text: 'Login',
            reference: 'loginButton',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});