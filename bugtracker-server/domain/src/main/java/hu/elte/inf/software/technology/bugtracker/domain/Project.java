package hu.elte.inf.software.technology.bugtracker.domain;

public class Project {
	
	private long id;
	private String projectName;
	private String projectDescription;
	private User defaultApproverId;
	private User defaultDeveloperId;
	private int s1Time;
	private int s2Time;
	private int s3Time;
	
	public Project(){
	}

	public Project(String  projectName, String projectDescription, User defaultApproverId,
			       User defaultDeveloperId, int s1Time, int s2Time, int s3Time){
		this.projectName = projectName;
		this.projectDescription = projectDescription;
	    this.defaultApproverId = defaultApproverId;
	    this.defaultDeveloperId = defaultDeveloperId;
	    this.s1Time = s1Time;
	    this.s2Time = s2Time;
	    this.s3Time = s3Time;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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
		return defaultApproverId;
	}

	public void setDefaultApproverId(User defaultApproverId) {
		this.defaultApproverId = defaultApproverId;
	}

	public User getDefaultDeveloperId() {
		return defaultDeveloperId;
	}

	public void setDefaultDeveloperId(User defaultDeveloperId) {
		this.defaultDeveloperId = defaultDeveloperId;
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
