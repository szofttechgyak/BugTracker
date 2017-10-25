Ext.define('Bugtracker.view.main.ControllerBase', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.controllerbase',

    onLogoutClicked: function () {
        localStorage.removeItem("JWT");
        localStorage.removeItem("role");
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});