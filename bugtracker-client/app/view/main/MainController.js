Ext.define('Bugtracker.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

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
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});