package Webknot.demo.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "tasks")
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private LocalDateTime deadline;

    private String status;

    @ManyToOne
    @JoinColumn(name = "attendee_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Attendees attendee;

    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Event event;

    // Getters and setters are automatically generated by Lombok
}