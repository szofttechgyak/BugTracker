package hu.elte.inf.software.technology.bugtracker.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.orm.jpa.JpaProperties.Hibernate;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.orm.hibernate5.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import hu.elte.inf.software.technology.bugtracker.domain.Ticket;

@Repository
@Transactional
@EnableTransactionManagement
public class TicketDaoImpl extends HibernateDaoSupport implements TicketDao{

	private HibernateTemplate hibernateTemplate;
	//private SessionFactory sessionFactory;
	
//	public SessionFactory getSessionFactory() {
//		return sessionFactory;
//	}
//	
//	@Autowired
//	public void setSessionFactory(SessionFactory sf){
//		this.sessionFactory = sf;
//	}
	
	public TicketDaoImpl(SessionFactory sf) {
		setSessionFactory(sf);
	}
	
	@Override
	public void addTicket(Ticket ticket) {
		Session session = getSessionFactory().getCurrentSession();
		session.persist(ticket);
	}

	@Override
	public void updateTicket(Ticket ticket) {
		Session session = getSessionFactory().getCurrentSession();
		session.update(ticket);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Ticket> listTickets() {
		Session session = getSessionFactory().getCurrentSession();
		List<Ticket> ticketsList = session.createQuery("from Ticket").list();
		return ticketsList;
	}

	@Override
	public Ticket getTicketById(int id) {
		Session session = getSessionFactory().getCurrentSession();		
		Ticket ticket = (Ticket) session.load(Ticket.class, new Integer(id));
		return ticket;
	}

	@Override
	public void removeTicket(int id) {
		Session session = getSessionFactory().getCurrentSession();
		Ticket ticket = (Ticket) session.load(Ticket.class, new Integer(id));
		if(null != ticket){
			session.delete(ticket);
		}
	}

}
