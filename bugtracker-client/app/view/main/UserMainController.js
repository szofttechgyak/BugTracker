Ext.define('Bugtracker.view.main.UserMainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usermain',

    onItemSelected: function(iView, iCellEl, iColIdx, iStore, iRowEl, iRowIdx, iEvent) {
                //console.log(iStore.data);
    },

//    onConfirm: function (choice) {
//        if (choice === 'yes') {
//            
//        }
//    },

    onLogoutClicked: function () {
        localStorage.removeItem("JWT");
        localStorage.removeItem("role");
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});