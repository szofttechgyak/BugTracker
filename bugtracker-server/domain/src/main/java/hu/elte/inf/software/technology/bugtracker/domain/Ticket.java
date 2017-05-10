package hu.elte.inf.software.technology.bugtracker.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Ticket")
public class Ticket {

	
	@Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ticketID")
    private int id;
    private String ticketName;
    private String ticketType;
    
    @ManyToOne
    @JoinColumn(name = "ownerId")
    private User owner;
    
    @ManyToOne
    @JoinColumn(name = "reporterId")
    private User reporter;
    
    private String priority;
    private int spentTime;
    private String ticketDescription;
    
    @ManyToOne
    @JoinColumn(name = "projectId")
    private Project project;
    
    public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Ticket(){
    }
    
    public Ticket(String ticketName, String ticketType, User ownerId, 
    		      User reporterId,String priority, int spenTime,
    		      String ticketDescription, Project projectId) {
        this.ticketName = ticketName;
        this.ticketType = ticketType;
        this.owner = ownerId;
        this.reporter = reporterId;
        this.priority = priority;
        this.spentTime = spenTime;
        this.ticketDescription = ticketDescription;
        this.project = projectId;
    }

     public long getId() {
        return id;
    }
    
    public String getName() {
        return ticketName;
    }
    
    public String getType() {
		return ticketType;
	}

	public void setType(String type) {
		this.ticketType = type;
	}

	public User getOwnerId() {
		return owner;
	}

	public void setOwnerId(User ownerId) {
		this.owner = ownerId;
	}

	public User getReporterId() {
		return reporter;
	}

	public void setReporterId(User reporterId) {
		this.reporter = reporterId;
	}

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

	public Project getProjectId() {
		return project;
	}

	public void setProjectId(Project projectId) {
		this.project = projectId;
	}

}
