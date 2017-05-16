Ext.define('Urls', {
   statics : {
	   endpoint : function(suffix) {
		   return 'http://localhost:8080' + suffix; 
	   }   
   }
});