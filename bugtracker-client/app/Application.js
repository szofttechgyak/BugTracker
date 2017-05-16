/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Bugtracker.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Bugtracker',
	
	requires: [
		'Bugtracker.view.login.Login'
    ],

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        loggedIn = localStorage.getItem("JWT");
        var view = "";
    	if (loggedIn) {
    		if (localStorage.getItem("role") === 'ROLE_ADMIN') {
    			view = 'admin-main';
    		} else {
    			view = 'user-main';
    		}
    	} else {
    		view = 'login';
    	}
    	
        Ext.create({
            xtype: view
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
