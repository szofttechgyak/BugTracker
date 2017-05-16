package hu.elte.inf.software.technology.bugtracker.rest.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.inf.software.technology.bugtracker.domain.Project;
import hu.elte.inf.software.technology.bugtracker.service.ProjectService;

@RestController
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping("/api/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @RequestMapping("/api/project/{projectId}")
    public Project getProject(@PathVariable int projectId) {
        return projectService.getProjectById(projectId);
    }

}
