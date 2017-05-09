package hu.elte.inf.software.technology.bugtracker.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;

//This is just a dummy entity for testing
public class Ticket {

    private long id;
    private String ticketName;
    private String ticketType;
    private User ownerId;
    private User reporterId;
    private String priority;
    private int spentTime;
    private String ticketDescription;
    private Project projectId;
    
    public Ticket(){
    }
    
    public Ticket(String ticketName, String ticketType, User ownerId, 
    		      User reporterId,String priority, int spenTime,
    		      String ticketDescription, Project projectId) {
        this.ticketName = ticketName;
        this.ticketType = ticketType;
        this.ownerId = ownerId;
        this.reporterId = reporterId;
        this.priority = priority;
        this.spentTime = spenTime;
        this.ticketDescription = ticketDescription;
        this.projectId = projectId;
    }

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "ticketID", unique = true, nullable = false)
    public long getId() {
        return id;
    }
    
    @Column(name = "ticketName", unique = true, nullable = false, length = 50)
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
		return ownerId;
	}

	public void setOwnerId(User ownerId) {
		this.ownerId = ownerId;
	}

	public User getReporterId() {
		return reporterId;
	}

	public void setReporterId(User reporterId) {
		this.reporterId = reporterId;
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
		return projectId;
	}

	public void setProjectId(Project projectId) {
		this.projectId = projectId;
	}

}
