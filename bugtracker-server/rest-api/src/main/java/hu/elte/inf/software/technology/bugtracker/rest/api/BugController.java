package hu.elte.inf.software.technology.bugtracker.rest.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.inf.software.technology.bugtracker.domain.Bug;
import hu.elte.inf.software.technology.bugtracker.rest.api.BugService;

@RestController
public class BugController {

    @Autowired
    private BugService bugService;
    
    @RequestMapping("/bug")
    public Bug bug() {
        return bugService.getBug();
    }
}
