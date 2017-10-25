/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bugtracker.view.main.UserMainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.usermainmodel',

    stores: {
        Tickets: {
          type: "tickets"
        },
        Projects: {
          type: "projects"
        }
      },

    data: {
        name: 'Bugtracker'
    }

    //TODO - add data, formulas and/or methods to support your view
});
