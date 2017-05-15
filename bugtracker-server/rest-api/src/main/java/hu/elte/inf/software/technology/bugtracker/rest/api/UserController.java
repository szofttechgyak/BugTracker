package hu.elte.inf.software.technology.bugtracker.rest.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.inf.software.technology.bugtracker.domain.Ticket;
import hu.elte.inf.software.technology.bugtracker.domain.User;
import hu.elte.inf.software.technology.bugtracker.service.TicketService;
import hu.elte.inf.software.technology.bugtracker.service.UserService;

@RestController
public class UserController {
	
	@Autowired
    private UserService userService;

    @RequestMapping("/api/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping("/api/user/{userId}")
    public User getUser(@PathVariable int userId) {
        return userService.getUserById(userId);
    }

}
