Ext.define('Bugtracker.view.main.UserMainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.usermain',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onLogoutClicked: function () {
        localStorage.removeItem("JWT");
        localStorage.removeItem("role");
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});