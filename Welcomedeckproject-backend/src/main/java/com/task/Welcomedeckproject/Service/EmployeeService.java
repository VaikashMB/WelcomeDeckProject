package com.task.Welcomedeckproject.Service;

import com.task.Welcomedeckproject.Entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployees();

    String deleteEmployee(int id);

    Optional<Employee> getEmployeeById(int id);




}
