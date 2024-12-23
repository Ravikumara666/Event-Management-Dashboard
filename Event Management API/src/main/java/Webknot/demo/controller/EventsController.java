package Webknot.demo.controller;

import Webknot.demo.models.Event;
import Webknot.demo.service.EventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  // Allow only requests from localhost:3000
@RequestMapping("events")
public class EventsController {

    @Autowired
    EventsService eventsService;

    @GetMapping("allevents")
    public ResponseEntity<List<Event>> getEvents()
    {
        return eventsService.getAllEvents();
    }
    @GetMapping("get/{id}")
    public ResponseEntity<Event> getEventByID(@PathVariable Long id)
    {
        return eventsService.getEventById(id);
    }
    @PostMapping("create")
    public ResponseEntity<Event> createEvent(@RequestBody Event event) {
        return eventsService.createEvent(event);
    }
    @PutMapping("update/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event event) {
        return eventsService.updateEvent(id, event);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        return eventsService.deleteEvent(id);
    }
}
