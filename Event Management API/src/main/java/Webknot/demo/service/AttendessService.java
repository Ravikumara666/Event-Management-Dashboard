package Webknot.demo.service;

import Webknot.demo.models.Attendees;
import Webknot.demo.repo.AttendessRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AttendessService {

    @Autowired
    private AttendessRepo attendessRepo;

    public ResponseEntity<List<Attendees>> getAllAttendess() {
        try {
            List<Attendees> attendees = attendessRepo.findAll();
            if (attendees.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // No events found
            }
            return new ResponseEntity<>(attendees, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Error in fetching events
        }
    }

    public ResponseEntity<Attendees> getAttendessById(Long id) {
        return new ResponseEntity<>(attendessRepo.findById(id).orElseThrow(() -> new RuntimeException("Attendee not found")),HttpStatus.OK);
    }


    public Attendees addAttendees(Attendees attendees) {

        return attendessRepo.save(attendees);
    }

    public ResponseEntity<String> deleteById(Long id) {
        Optional<Attendees> attendee = attendessRepo.findById(id);

        if (!attendee.isPresent()) {
            return new ResponseEntity<>("Attendee not found", HttpStatus.NOT_FOUND);
        }

        // Proceed to delete the attendee
        attendessRepo.deleteById(id);

        // Return a success message
        return new ResponseEntity<>("Attendee deleted successfully", HttpStatus.OK);
    }
}
