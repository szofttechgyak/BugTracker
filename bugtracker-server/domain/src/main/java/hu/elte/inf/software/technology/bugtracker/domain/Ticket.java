package hu.elte.inf.software.technology.bugtracker.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Ticket")
public class Ticket implements Serializable{

    private int id;
    private String ticketName;
    private String ticketType;
    private User owner;
   // private User reporter;
    private Project project;
    private String priority;
    private int spentTime;
    private String ticketDescription;
    
	public Ticket(){
    }
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticketId")
    public long getId() {
        return id;
    }
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "projectId", nullable = false)
    public Project getProject() {
		return project;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userId", nullable = false)
	public User getOwner() {
		return owner;
	}

/*	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "userId", nullable = false)
	public User getReporter() {
		return reporter;
	}*/
	
	public void setProject(Project project) {
		this.project = project;
	}
    
    public String getTicketName() {
		return ticketName;
	}

	public void setTicketName(String ticketName) {
		this.ticketName = ticketName;
	}

	public String getTicketType() {
		return ticketType;
	}

	public void setTicketType(String ticketType) {
		this.ticketType = ticketType;
	}

	public String getTicketDescription() {
		return ticketDescription;
	}

	public void setTicketDescription(String ticketDescription) {
		this.ticketDescription = ticketDescription;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setOwner(User ownerId) {
		this.owner = ownerId;
	}
	
/*	public void setReporter(User reporterId) {
		this.reporter = reporterId;
	}*/
	
	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public int getSpentTime() {
		return spentTime;
	}

	public void setSpentTime(int spentTime) {
		this.spentTime = spentTime;
	}

	public String getDescription() {
		return ticketDescription;
	}

	public void setDescription(String description) {
		this.ticketDescription = description;
	}

}
