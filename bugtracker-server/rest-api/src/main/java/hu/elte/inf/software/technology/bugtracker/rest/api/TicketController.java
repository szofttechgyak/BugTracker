package hu.elte.inf.software.technology.bugtracker.rest.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hu.elte.inf.software.technology.bugtracker.domain.Ticket;

@RestController
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @RequestMapping("/api/tickets")
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @RequestMapping("/api/ticket/{ticketId}")
    public Ticket getTicket(@PathVariable int ticketId) {
        return ticketService.getTicketById(ticketId);
    }
}
