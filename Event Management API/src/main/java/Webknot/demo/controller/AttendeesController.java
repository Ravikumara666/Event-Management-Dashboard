package Webknot.demo.controller;


import Webknot.demo.models.Attendees;
import Webknot.demo.service.AttendessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("attendees")
public class AttendeesController {

    @Autowired
    private AttendessService attendessService;
    @GetMapping
    public ResponseEntity<List<Attendees>> getAllAttendess() // Get All Attendess
    {
        return attendessService.getAllAttendess();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Attendees> getAttendessById(@PathVariable Long id) // get Attendee By ID
    {
        return attendessService.getAttendessById(id);
    }
    @PostMapping("add")
    public ResponseEntity<Attendees> addAttendees(@RequestBody Attendees attendees) // Add Attendee
    {
        Attendees attendees1= attendessService.addAttendees(attendees);
        return ResponseEntity.ok(attendees1);
    }
    @PostMapping("delete/{id}")
    public ResponseEntity<String> deletById(@PathVariable Long id)
    {
        return attendessService.deleteById(id);
    }

}
