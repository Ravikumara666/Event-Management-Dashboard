package Webknot.demo.service;

import Webknot.demo.models.Event;
import Webknot.demo.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventsService {
    @Autowired
    EventRepo eventRepo;
    public ResponseEntity<List<Event>> getAllEvents() {
        try {
            List<Event> events = eventRepo.findAll();
            if (events.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // No events found
            }
            return new ResponseEntity<>(events, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Error in fetching events
        }
    }

    public ResponseEntity<Event> getEventById(Long id) {
        try {
            // Use findById and check if the event is present
            return eventRepo.findById(id)
                    .map(event -> new ResponseEntity<>(event, HttpStatus.OK))  // Event found
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));  // Event not found
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);  // Handle error
        }
    }

    public ResponseEntity<Event> createEvent(Event event) {
        try {
            Event savedEvent = eventRepo.save(event);  // Save the new event
            return new ResponseEntity<>(savedEvent, HttpStatus.CREATED);  // Return the created event
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);  // Handle error
        }
    }

    public ResponseEntity<Event> updateEvent(Long id, Event event) {
        try {
            // Check if the event exists
            if (!eventRepo.existsById(id)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Return 404 if event doesn't exist
            }

            event.setId(id);  // Set the ID of the event to be updated
            Event updatedEvent = eventRepo.save(event);  // Save the updated event
            return new ResponseEntity<>(updatedEvent, HttpStatus.OK);  // Return the updated event
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);  // Handle error
        }
    }

    public ResponseEntity<Void> deleteEvent(Long id) {
        try {
            // Check if the event exists
            if (!eventRepo.existsById(id)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Return 404 if event doesn't exist
            }

            eventRepo.deleteById(id);  // Delete the event by ID
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // Return 204 if deleted successfully
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);  // Handle error
        }
    }
}
