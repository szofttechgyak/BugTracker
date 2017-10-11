Ext.define('Bugtracker.view.main.UserMainController', {
    extend: 'Bugtracker.view.main.ControllerBase',

    alias: 'controller.usermaincontroller',
    config: {
        stores: ['Bugtracker.store.AllUsersStore']
    },

    onItemSelected: function(iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
        var popup = Ext.create('Bugtracker.view.main.ProjectDetail', {projectInfo: iStore});
        // var popup = new Bugtracker.view.main.ProjectDetail();
        popup.show();
        console.log(localStorage.getItem("JWT"));
        console.log(popup.projectInfo.data);
    }
});