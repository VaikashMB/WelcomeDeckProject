package com.task.Welcomedeckproject.Controller;

import com.task.Welcomedeckproject.Entity.Employee;
import com.task.Welcomedeckproject.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public String add(@RequestBody Employee employee){
        employeeService.saveEmployee(employee);
        return "New Employee is added";
    }

    @GetMapping("/get")
    public List<Employee> list(){
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteDetails(@PathVariable int id){
        return employeeService.deleteEmployee(id);
    }



    @GetMapping("/getById/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        if (employee.isPresent()) {
            return ResponseEntity.ok(employee.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}

