Ext.define('Bugtracker.view.project.admin.ProjectsTabController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.project.admin.projectstabcontroller',

    showNewProjectDialog: function() {
        var view = this.getView();
        this.dialog = view.add({
            xtype: 'newprojectdialog'
        });
        this.dialog.show();
            
    },
    
    showUpdateProjectDialog: function() {
        var selected = Ext.getCmp('projectslist').selection;
        if (selected === null) {
            Ext.MessageBox.alert('Error', 'No selected project!');
        } else {	
            var view = this.getView();
            this.dialog = view.add({
                xtype: 'updateprojectdialog'
            });
            this.dialog.setProject(selected.data);
            this.dialog.show();
        }
    },

    deleteProject: function() {
        var selected = Ext.getCmp('projectslist').selection;
        if (selected === null) {
            Ext.MessageBox.alert('Error', 'No selected project!');
        } else {		
            Ext.Ajax.request({
                url : Urls.endpoint("/api/removeProject/" + selected.id),
                method : 'POST',
                headers: {
                    'authorization' : localStorage.getItem("JWT")
                },
                success : function(response) {
                    Ext.getCmp('projectslist').getStore().load();
                    Ext.MessageBox.alert('Ok',
                            'Project successfully deleted!');
                },
                failure : function(response) {
                    Ext.MessageBox.alert('Error',
                            'Cannot delete project');
                }
            });						
        }
    },

    createNewProject: function() {
        var project = {
            projectName : Ext.getCmp("projectname")
                    .getValue(),
            projectDescription : Ext.getCmp("description")
                    .getValue(),
            defaultApprover : Ext.getCmp('userslist').getStore().findRecord('id',Ext.getCmp("defaultapprover")
                    .getValue()).data,
            defaultDeveloper : Ext.getCmp('userslist').getStore().findRecord('id',Ext.getCmp("defaultdeveloper")
                    .getValue()).data,
            s1Time : Ext.getCmp("s1time")
                    .getValue(),
            s2Time : Ext.getCmp("s2time")
                    .getValue(),
            s3Time : Ext.getCmp("s3time")
                    .getValue(),
        };

        Ext.Ajax.request({
            url : Urls.endpoint("/api/addProject"),
            method : 'POST',
            jsonData : project,
            headers: {
                'authorization' : localStorage.getItem("JWT")
            },
            success : function(response) {
                Ext.getCmp('projectslist').getStore().load();
                Ext.MessageBox.alert('Ok',
                        'Project successfully created!');
            },
            failure : function(response) {
                Ext.MessageBox.alert('Error',
                        'Cannot create project');
            }
        });
        this.dialog.destroy();
    },

    updateProject: function() {
        var project = {
            projectName : Ext.getCmp("projectname")
                    .getValue(),
            projectDescription : Ext.getCmp("description")
                    .getValue(),
            defaultApprover : Ext.getCmp('userslist').getStore().findRecord('id',Ext.getCmp("defaultapprover")
                    .getValue()).data,
            defaultDeveloper : Ext.getCmp('userslist').getStore().findRecord('id',Ext.getCmp("defaultdeveloper")
                    .getValue()).data,
            s1Time : Ext.getCmp("s1time")
                    .getValue(),
            s2Time : Ext.getCmp("s2time")
                    .getValue(),
            s3Time : Ext.getCmp("s3time")
                    .getValue(),
        };

        Ext.Ajax.request({
            url : Urls.endpoint("/api/updateProject/" + this.dialog.projectID),
            method : 'POST',
            jsonData : project,
            headers: {
                'authorization' : localStorage.getItem("JWT")
            },
            success : function(response) {
                Ext.getCmp('projectslist').getStore().load();
                Ext.MessageBox.alert('Ok',
                        'Project successfully updated!');
            },
            failure : function(response) {
                Ext.MessageBox.alert('Error',
                        'Cannot update project!');
            }
        });
        this.dialog.destroy();
    }
});