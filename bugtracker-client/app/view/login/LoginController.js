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
				Ext.Ajax.request 
				({ 
					url: 'http://localhost:8080/role', 
					method: 'GET',    
					
					headers: {
						'authorization' : localStorage.getItem("JWT")
					},
					
					success: function(response) 
					{ 
						localStorage.setItem("role", response.responseText);
						_this.getView().destroy();
						if(localStorage.getItem("role") === "ROLE_ADMIN") {
							Ext.create({
								xtype: 'admin-main'
							});
						}else{
							Ext.create({
								xtype: 'user-main'
							}); 
						}	
					}
				});
			}, 
			failure: function(response) 
			{ 
				displayField.setValue("Wrong username or password");
			}      
		});  
		
    }
});