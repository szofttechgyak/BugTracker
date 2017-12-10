/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Bugtracker.view.main.AdminMainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.adminmainmodel',

    stores: {
        Projects: {
          type: "projects"
        },
        Users: {
          type: "users"
        },
        ProjectHistory: {
          type: "projecthistory"
        },
        AssignedUsers : {
          type: "assignedusers"
        }
      },

    data: {
        name: 'Bugtracker',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

    //TODO - add data, formulas and/or methods to support your view
});
