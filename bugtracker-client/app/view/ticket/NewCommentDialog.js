Ext.define('Bugtracker.view.ticket.NewCommentDialog', {
    extend: 'Ext.window.Window',
    xtype: 'newcommentdialog',
	title : 'Add comment',
	floating : true,
	centered : true,
	y : '20%',
	width : 300,
	modal : true,
	items :
	[
		{
			xtype: 'form',
			items:
			[
				{
					xtype : 'textfield',
					name : 'commentdescription',
					id : 'commentdescription',
					fieldLabel : 'Comment description',
					maxLength: 250,
					height: 50
				},
				{
					xtype : 'toolbar',
					docked : 'bottom',
					items :
					[
						'->',
						{
							xtype : 'button',
							text : 'Submit',
							iconCls : 'x-fa fa-check',
							formBind : true,
							handler : 'addNewComment'
						},
						{
							xtype : 'button',
							text : 'Cancel',
							iconCls : 'x-fa fa-close',
							handler : function() {
								this.up('window').destroy();
							}
						}
					]
				}
			]
		}
	],

	initComponent: function () {
		this.callParent();
	}
});
