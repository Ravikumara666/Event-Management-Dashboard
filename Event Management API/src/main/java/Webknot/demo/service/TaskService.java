package Webknot.demo.service;

import Webknot.demo.models.Task;
import Webknot.demo.models.TaskStatus;
import Webknot.demo.repo.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getTasksByEvent(Long eventId) {
        return taskRepository.findByEventId(eventId);
    }

    public Task updateTaskStatus(Long taskId, TaskStatus status) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setStatus(String.valueOf(status));
        return taskRepository.save(task);
    }

    public ResponseEntity<List<Task>> getAllTasks() {

        List<Task> tasks = taskRepository.findAll();

        try {
            if(tasks.isEmpty())
            {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(tasks,HttpStatus.OK);
        }
        catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR); // Error in fetching events
        }
        //
    }
}