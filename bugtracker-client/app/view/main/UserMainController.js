Ext.define('Bugtracker.view.main.UserMainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usermain',
    config: {
        stores: ['Bugtracker.store.AllUsersStore']
    },

    onItemSelected: function(iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
        var popup = Ext.create('Bugtracker.view.main.ProjectDetail', {projectInfo: iStore});
        // var popup = new Bugtracker.view.main.ProjectDetail();
        popup.show();
        console.log(localStorage.getItem("JWT"));
        console.log(popup.projectInfo.data);
    },

//    onConfirm: function (choice) {
//        if (choice === 'yes') {
//            
//        }
//    },

    onLogoutClicked: function () {
        localStorage.removeItem("JWT");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});