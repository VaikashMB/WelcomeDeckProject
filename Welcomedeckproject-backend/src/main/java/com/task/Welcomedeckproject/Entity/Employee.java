package com.task.Welcomedeckproject.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int empId;
    private  String name;
    private String email;
    private  String contact;
    private String hometown;
    private String educationQualification;
    private String experience;
    private String hobbies;
    private String skills;
    private String favouriteQuote;
    private String alternateProfession;
    private String assignedManager;
    private String assignedIBU;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEmp_id() {
        return empId;
    }

    public void setEmp_id(int emp_id) {
        this.empId = emp_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getHometown() {
        return hometown;
    }

    public void setHometown(String hometown) {
        this.hometown = hometown;
    }

    public String getEducationQualification() {
        return educationQualification;
    }

    public void setEducationQualification(String educationQualification) {
        this.educationQualification = educationQualification;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getHobbies() {
        return hobbies;
    }

    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getFavouriteQuote() {
        return favouriteQuote;
    }

    public void setFavouriteQuote(String favouriteQuote) {
        this.favouriteQuote = favouriteQuote;
    }

    public String getAlternateProfession() {
        return alternateProfession;
    }

    public void setAlternateProfession(String alternateProfession) {
        this.alternateProfession = alternateProfession;
    }

    public String getAssignedManager() {
        return assignedManager;
    }

    public void setAssignedManager(String assignedManager) {
        this.assignedManager = assignedManager;
    }

    public String getAssignedIBU() {
        return assignedIBU;
    }

    public void setAssignedIBU(String assignedIBU) {
        this.assignedIBU = assignedIBU;
    }
}
