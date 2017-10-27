Ext.define("Bugtracker.view.project.admin.ProjectsTabController", {
  extend: "Ext.app.ViewController",

  alias: "controller.project.admin.projectstabcontroller",

  showNewProjectDialog: function() {
    var view = this.getView();
    this.dialog = view.add({
      xtype: "newprojectdialog"
    });
    this.dialog.show();
  },

  showUpdateProjectDialog: function() {
    var selected = this.lookupReference("projectslist-ref").selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected project!");
    } else {
      var view = this.getView();
      this.dialog = view.add({
        xtype: "updateprojectdialog"
      });
      this.setProject(this.dialog, selected.data);
      this.dialog.show();
    }
  },

  deleteProject: function() {
    var me = this;
    var selected = this.lookupReference("projectslist-ref").selection;
    if (selected === null) {
      Ext.MessageBox.alert("Error", "No selected project!");
    } else {
      Ext.Ajax.request({
        url: Urls.endpoint("/api/removeProject/" + selected.id),
        method: "POST",
        headers: {
          authorization: localStorage.getItem("JWT")
        },
        success: function(response) {
          me.loadProjectStore();
          Ext.MessageBox.alert("Ok", "Project successfully deleted!");
        },
        failure: function(response) {
          Ext.MessageBox.alert("Error", "Cannot delete project");
        }
      });
    }
  },

  createNewProject: function(btn, event) {
    var me = this;
    var project = {
      projectName: Ext.getCmp("projectname").getValue(),
      projectDescription: Ext.getCmp("description").getValue(),
      defaultApprover: this.getViewModel()
        .getStore("Users")
        .findRecord("id", Ext.getCmp("defaultapprover").getValue()).data,
      defaultDeveloper: this.getViewModel()
        .getStore("Users")
        .findRecord("id", Ext.getCmp("defaultdeveloper").getValue()).data,
      s1Time: Ext.getCmp("s1time").getValue(),
      s2Time: Ext.getCmp("s2time").getValue(),
      s3Time: Ext.getCmp("s3time").getValue()
    };

    Ext.Ajax.request({
      url: Urls.endpoint("/api/addProject"),
      method: "POST",
      jsonData: project,
      headers: {
        authorization: localStorage.getItem("JWT")
      },
      success: function(response) {
        me.loadProjectStore();
        Ext.MessageBox.alert("Ok", "Project successfully created!");
      },
      failure: function(response) {
        Ext.MessageBox.alert("Error", "Cannot create project");
      }
    });
    this.dialog.destroy();
  },

  updateProject: function() {
    var me = this;
    var project = {
      projectName: Ext.getCmp("projectname").getValue(),
      projectDescription: Ext.getCmp("description").getValue(),
      defaultApprover: this.getViewModel()
        .getStore("Users")
        .findRecord("id", Ext.getCmp("defaultapprover").getValue()).data,
      defaultDeveloper: this.getViewModel()
        .getStore("Users")
        .findRecord("id", Ext.getCmp("defaultdeveloper").getValue()).data,
      s1Time: Ext.getCmp("s1time").getValue(),
      s2Time: Ext.getCmp("s2time").getValue(),
      s3Time: Ext.getCmp("s3time").getValue()
    };

    Ext.Ajax.request({
      url: Urls.endpoint("/api/updateProject/" + this.dialog.projectID),
      method: "POST",
      jsonData: project,
      headers: {
        authorization: localStorage.getItem("JWT")
      },
      success: function(response) {
        me.loadProjectStore();
        Ext.MessageBox.alert("Ok", "Project successfully updated!");
      },
      failure: function(response) {
        Ext.MessageBox.alert("Error", "Cannot update project!");
      }
    });
    this.dialog.destroy();
  },

  setProject: function(dialog, project) {
    dialog.projectID = project.id;
    Ext.getCmp("projectname").setValue(project.projectName);
    Ext.getCmp("description").setValue(project.projectDescription);
    Ext.getCmp("defaultapprover").setValue(
      this.getViewModel()
        .getStore("Users")
        .findRecord("userName", project.defaultApprover).data.id
    );
    Ext.getCmp("defaultdeveloper").setValue(
      this.getViewModel()
        .getStore("Users")
        .findRecord("userName", project.defaultDeveloper).data.id
    );
    Ext.getCmp("s1time").setValue(project.s1Time);
    Ext.getCmp("s2time").setValue(project.s2Time);
    Ext.getCmp("s3time").setValue(project.s3Time);
  },

  onRender: function() {
    this.loadProjectStore();
    this.loadUserStore();
  },

  loadProjectStore: function(panel, eOpts) {
    this.loadStore("Projects");
  },

  loadUserStore: function(panel, eOpts) {
    this.loadStore("Users");
  },

  loadStore: function(type) {
    var store = this.getViewModel().getStore(type);
    var proxy = store.getProxy();
    proxy.headers.authorization = localStorage.getItem("JWT");
    store.setProxy(proxy);
    store.load();
  }
});
