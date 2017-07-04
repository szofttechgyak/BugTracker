Ext.define('Bugtracker.view.main.UserTicketsFilteredList', {
    extend: 'Bugtracker.view.main.UserTicketsList',
	xtype: 'userticketsfilteredlist', 
    title: 'My tickets',
    store: {type: 'alltickets'},
    listeners: {
        beforerender: function(){
            this.getStore().getProxy().setUrl('http://157.181.161.108:8080/api/ticketByUser/' + localStorage.getItem("id"));
            this.getStore().load();
        }
    }
});