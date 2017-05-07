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
        var loggedIn;
        loggedIn = localStorage.getItem("JWT");
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
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
