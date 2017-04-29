package hu.elte.inf.software.technology.bugtracker.domain;

//This is just a dummy entity for testing
public class Ticket {

    private final int id;
    private final String name;
    private final String owner;

    public Ticket(int id, String name, String owner) {
        this.id = id;
        this.name = name;
        this.owner = owner;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getOwner() {
        return owner;
    }

}
