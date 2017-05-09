package hu.elte.inf.software.technology.bugtracker.domain;

public class User {
	
	private long id;
	private String userName;
	private String emailAddress;
	private String password;
	
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

	public void setId(long id) {
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
	
}
