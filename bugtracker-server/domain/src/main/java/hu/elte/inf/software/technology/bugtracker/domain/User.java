package hu.elte.inf.software.technology.bugtracker.domain;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


import org.hibernate.annotations.Proxy;

@Entity
@Table(name = "User")
@Proxy(lazy = false)
public class User implements Serializable{
	
	private int id;
	private String userName;
	private String emailAddress;
	private String password;
	private Set<Ticket> ownedTickets;
	//private Set<Ticket> reportedTickets;
	private Set<Project> approvedProjects;
	//private Set<Project> developedProjects;
	private boolean admin;
	
	public User(){
	}

	@Id
	@Column(name = "userId")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getId() {
		return id;
	}
	
	@JsonIgnore
	@OneToMany(mappedBy = "owner" ,fetch = FetchType.EAGER)
	public Set<Ticket> getOwnedTickets() {
		return ownedTickets;
	}
	/*
	@OneToMany(mappedBy = "reporter")
	public Set<Ticket> getReportedTickets() {
		return reportedTickets;
	}*/
	@JsonIgnore
	@OneToMany(mappedBy = "defaultApprover", fetch = FetchType.EAGER)
	public Set<Project> getApproverTickets() {
		return approvedProjects;
	}
	/*
	@OneToMany(mappedBy = "defaultDeveloper")
	public Set<Project> getDeveloperTickets() {
		return developedProjects;
	}*/
	
	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
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

	public void setOwnedTickets(Set<Ticket> ownedTickets) {
		this.ownedTickets = ownedTickets;
	}
/*
	public void setReportedTickets(Set<Ticket> reportedTickets) {
		this.reportedTickets = reportedTickets;
	}*/

	public void setApproverTickets(Set<Project> approverTickets) {
		this.approvedProjects = approverTickets;
	}
/*
	public void setDeveloperTickets(Set<Project> developerTickets) {
		this.developedProjects = developerTickets;
	}*/
	
}
