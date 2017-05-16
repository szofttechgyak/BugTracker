package hu.elte.inf.software.technology.bugtracker.rest.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.inf.software.technology.bugtracker.domain.User;
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

    @RequestMapping("/api/addUser")
    public void addUser() {
    	User user = new User();
    	user.setUserName("simon");
    	user.setEmailAddress("simon@gmail.com");
    	user.setPassword("1234");
        userService.addUser(user);
    }
    
    @RequestMapping("/api/updateUser/{userId}")
    public void updateUser(@PathVariable int userId) {
    	User user = userService.getUserById(userId);
    	user.setUserName("bec"+1);
        userService.updateUser(user);
    }
    
    @RequestMapping("/api/removeUser/{userId}")
    public void removeUser(@PathVariable int userId) {
        userService.removeUser(userId);
    }
    
}
