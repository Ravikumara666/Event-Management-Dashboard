package Webknot.demo.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
@Data
@Entity
@Table(name = "events")  // Explicitly specifying the table name
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Event(Long id, String name, String description, String location, LocalDate date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.date = date;
    }

    public Event() {
        // Optional: You can initialize default values here if needed.
    }
    public Event(Long id) {
        this.id = id;
    }

    private String name;
    private String description;
    private String location;
    private LocalDate date;
}