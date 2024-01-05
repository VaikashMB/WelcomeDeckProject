package com.task.Welcomedeckproject.Service;

import com.task.Welcomedeckproject.Entity.Employee;
import com.task.Welcomedeckproject.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public String deleteEmployee(int id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return "Deleted " + id;
        }else {
            return "Invalid Id";
        }
    }

    @Override
    public Optional<Employee> getEmployeeById(int id) {
        return employeeRepository.findByEmpId(id);
    }




}
