package Webknot.demo.controller;

import Webknot.demo.models.Task;
import Webknot.demo.models.TaskStatus;
import Webknot.demo.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("tasks")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        return new ResponseEntity<>(taskService.createTask(task), HttpStatus.CREATED);
    }
    @GetMapping
    public  ResponseEntity<List<Task>> getAllTasks()
    {
        return taskService.getAllTasks();
    }

    @GetMapping("/event/{eventId}")
    public ResponseEntity<List<Task>> getTasksByEvent(@PathVariable Long eventId) {
        return new ResponseEntity<>(taskService.getTasksByEvent(eventId), HttpStatus.OK);
    }

    @PatchMapping("{id}/status")
    public ResponseEntity<Task> updateTaskStatus(@PathVariable Long id, @RequestParam String status) {
        // Convert String to TaskStatus enum
        TaskStatus taskStatus = TaskStatus.valueOf(status.toUpperCase()); // Ensure case-insensitive matching
        return new ResponseEntity<>(taskService.updateTaskStatus(id, taskStatus), HttpStatus.OK);
    }
}
