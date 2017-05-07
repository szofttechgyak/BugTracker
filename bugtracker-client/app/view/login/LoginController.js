Ext.define('Bugtracker.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
	
    onLoginClick: function() {
		var authentication = {
			username : Ext.getCmp("username").getValue(),
			password : Ext.getCmp("password").getValue()
		};
		var displayField = Ext.getCmp("displayfield");
		var _this = this;

		Ext.Ajax.request 
		({ 
			url: 'http://localhost:8080/login', 
			method: 'POST',    
			jsonData : authentication,
			success: function(response) 
			{ 
			    localStorage.setItem("JWT", response.getResponseHeader('authorization'));
				_this.getView().destroy();
				Ext.create({
					xtype: 'app-main'
				});
			}, 
			failure: function(response) 
			{ 
				displayField.setValue("Wrong username or password");
			}      
		});  
		
    }
});