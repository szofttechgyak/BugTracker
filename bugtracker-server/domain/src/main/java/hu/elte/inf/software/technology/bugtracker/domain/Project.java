package hu.elte.inf.software.technology.bugtracker.domain;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Project")
public class Project {
	
	@Id
	@Column(name = "ProjectId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String projectName;
	private String projectDescription;
	
	@ManyToOne
    @JoinColumn(name = "defaultApproverId")
	private User defaultApprover;
	
	@ManyToOne
    @JoinColumn(name = "defaultDeveloperId")
	private User defaultDeveloper;
	
	private int s1Time;
	private int s2Time;
	private int s3Time;
	
	@OneToMany(mappedBy = "project")
	private Set<Ticket> tickets;
	
	public Set<Ticket> getTickets() {
		return tickets;
	}

	public void setTickets(Set<Ticket> tickets) {
		this.tickets = tickets;
	}

	public Project(){
	}

	public Project(String  projectName, String projectDescription, User defaultApproverId,
			       User defaultDeveloperId, int s1Time, int s2Time, int s3Time){
		this.projectName = projectName;
		this.projectDescription = projectDescription;
	    this.defaultApprover = defaultApproverId;
	    this.defaultDeveloper = defaultDeveloperId;
	    this.s1Time = s1Time;
	    this.s2Time = s2Time;
	    this.s3Time = s3Time;
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getProjectDescription() {
		return projectDescription;
	}

	public void setProjectDescription(String projectDescription) {
		this.projectDescription = projectDescription;
	}

	public User getDefaultApproverId() {
		return defaultApprover;
	}

	public void setDefaultApproverId(User defaultApproverId) {
		this.defaultApprover = defaultApproverId;
	}

	public User getDefaultDeveloperId() {
		return defaultDeveloper;
	}

	public void setDefaultDeveloperId(User defaultDeveloperId) {
		this.defaultDeveloper = defaultDeveloperId;
	}

	public int getS1Time() {
		return s1Time;
	}

	public void setS1Time(int s1Time) {
		this.s1Time = s1Time;
	}

	public int getS2Time() {
		return s2Time;
	}

	public void setS2Time(int s2Time) {
		this.s2Time = s2Time;
	}

	public int getS3Time() {
		return s3Time;
	}

	public void setS3Time(int s3Time) {
		this.s3Time = s3Time;
	}
	
}
