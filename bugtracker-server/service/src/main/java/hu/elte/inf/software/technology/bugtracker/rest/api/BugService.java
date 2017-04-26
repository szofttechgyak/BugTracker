package hu.elte.inf.software.technology.bugtracker.rest.api;

import org.springframework.stereotype.Service;

import hu.elte.inf.software.technology.bugtracker.domain.Bug;

@Service
public class BugService {

    public Bug getBug() {
        return new Bug();
    }
    
}
