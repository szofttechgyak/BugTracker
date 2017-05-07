package hu.elte.inf.software.technology.bugtracker.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "hu.elte.inf.software.technology.bugtracker.rest.api",
                                            "hu.elte.inf.software.technology.bugtracker.application" })
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
