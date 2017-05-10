package hu.elte.inf.software.technology.bugtracker.domain;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "User")
public class User {
	
	@Id
	@Column(name = "userId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String userName;
	private String emailAddress;
	private String password;
	
	
	//@OneToMany(mappedBy = "owner")
	//private Set<Ticket> ownedTickets;
	
	//@OneToMany(mappedBy = "reporter")
//	private Set<Ticket> reportedTickets;
	
	
	//@OneToMany(mappedBy = "defaultApprover")
	//private Set<Ticket> approverTickets;
	
	
	//@OneToMany(mappedBy = "defaultDeveloper")
	//private Set<Ticket> developerTickets;
	
	
	
	public User(){
	}

	public User(String userName, String emailAddress, String password){
		this.userName = userName;
		this.emailAddress = emailAddress;
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	/*
	public Set<Ticket> getOwnedTickets() {
		return ownedTickets;
	}

	public void setOwnedTickets(Set<Ticket> ownedTickets) {
		this.ownedTickets = ownedTickets;
	}

	public Set<Ticket> getReportedTickets() {
		return reportedTickets;
	}

	public void setReportedTickets(Set<Ticket> reportedTickets) {
		this.reportedTickets = reportedTickets;
	}
	
	public Set<Ticket> getApproverTickets() {
		return approverTickets;
	}

	public void setApproverTickets(Set<Ticket> approverTickets) {
		this.approverTickets = approverTickets;
	}

	public Set<Ticket> getDeveloperTickets() {
		return developerTickets;
	}

	public void setDeveloperTickets(Set<Ticket> developerTickets) {
		this.developerTickets = developerTickets;
	}*/

	
}
