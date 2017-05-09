package hu.elte.inf.software.technology.bugtracker.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import hu.elte.inf.software.technology.bugtracker.domain.Ticket;

@Repository
public class TicketDaoImpl implements TicketDao {

	private SessionFactory sessionFactory;
	
	public void setSessionFactory(SessionFactory sf){
		this.sessionFactory = sf;
	}
	@Override
	public void addTicket(Ticket ticket) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(ticket);
	}

	@Override
	public void updateTicket(Ticket ticket) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(ticket);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Ticket> listTickets() {
		Session session = this.sessionFactory.getCurrentSession();
		List<Ticket> ticketsList = session.createQuery("from Tickets").list();
		return ticketsList;
	}

	@Override
	public Ticket getTicketById(int id) {
		Session session = this.sessionFactory.getCurrentSession();		
		Ticket ticket = (Ticket) session.load(Ticket.class, new Integer(id));
		return ticket;
	}

	@Override
	public void removeTicket(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Ticket ticket = (Ticket) session.load(Ticket.class, new Integer(id));
		if(null != ticket){
			session.delete(ticket);
		}
	}

}
