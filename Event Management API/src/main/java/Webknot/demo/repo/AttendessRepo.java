package Webknot.demo.repo;

import Webknot.demo.models.Attendees;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendessRepo extends JpaRepository<Attendees,Long> {
}
