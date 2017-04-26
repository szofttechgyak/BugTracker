package hu.elte.inf.software.technology.bugtracker.rest.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.inf.software.technology.bugtracker.domain.Bug;

@RestController
public class BugController {

    @RequestMapping("/bug")
    public Bug bug() {
        return new Bug();
    }
}
