package hu.elte.inf.software.technology.bugtracker.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import hu.elte.inf.software.technology.bugtracker.domain.Project;
import hu.elte.inf.software.technology.bugtracker.domain.Ticket;
import hu.elte.inf.software.technology.bugtracker.domain.User;

@Service
public class TicketService {
    
    private static List<Ticket> tickets;
    
    static {
        tickets = new ArrayList<>();
        //tickets.add(new Ticket(1, "Login not working", "Pistike"));
        tickets.add(new Ticket("Test1", "Bug", new User("simon", "simon@test.com", "12345"), new User("kovacs", "kovacs@test.com", "1234"), "C", 2, "Dummy ticket description", new Project()));
        //tickets.add(new Ticket(2, "Input form missing", "Gipsz Jakab"));
        //tickets.add(new Ticket(3, "Wrong calculated value", "John Doe"));
    }
    
    public List<Ticket> getAllTickets() {
        return tickets;
    } 
    
    public Ticket getTicketById(int id) {
        if (id >= 1 && id <= tickets.size()) {
            return tickets.get(id - 1);
        }
        return null;
    }
    
}
