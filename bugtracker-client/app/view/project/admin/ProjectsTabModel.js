Ext.define('Bugtracker.view.project.admin.ProjectsTabModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.project.admin.projectstabmodel',

    stores : {
        Projects : {
            type : 'userprojects'
        }
	},
});