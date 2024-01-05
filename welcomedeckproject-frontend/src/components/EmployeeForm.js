import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';

function EmployeeForm() {
    const navigate = useNavigate();

    const [emp_id, setEmp_id] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [hometown, setHometown] = useState('')
    const [educationQualification, setEducational_qualification] = useState('')
    const [experience, setExperience] = useState('')
    const [hobbies, setHobbies] = useState('')
    const [skills, setSkills] = useState('')
    const [favouriteQuote, setFavorite_quote] = useState('')
    const [alternateProfession, setAlternate_profession] = useState('')
    const [assignedManager, setAssigned_manager] = useState('')
    const [assignedIBU, setAssigned_ibu] = useState('')



    const handleClick = (e) => {
        e.preventDefault();
        const employee = { emp_id, name, email, contact, hometown, educationQualification, experience, hobbies, skills, favouriteQuote, alternateProfession, assignedManager, assignedIBU }
        console.log(employee);
        fetch("http://localhost:8080/employee/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
        }).then(() => {
            console.log("New Employee Added");
            navigate('/employeelist');

        });
    };





    return (
        <div>
            <div className='fill-row'>
                <h1 className='fill'>Fill the Form</h1>
                <Link to='/employeelist' className='decks'>View Employee List</Link>
            </div>
            <Form className='form'>
                <div className='col-6'>
                    <Form.Group className="mb-3">
                        <Form.Label>Employee_id</Form.Label>
                        <Form.Control type="text" placeholder="Enter employee_id"
                            value={emp_id}
                            onChange={(e) => setEmp_id(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>HomeTown</Form.Label>
                        <Form.Control type="text" placeholder="Enter hometown"
                            value={hometown}
                            onChange={(e) => setHometown(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Educational Qualification</Form.Label>
                        <Form.Control type="text" placeholder="Enter educational qualification"
                            value={educationQualification}
                            onChange={(e) => setEducational_qualification(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control type="text" placeholder="Enter experience"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </Form.Group>
                </div>
                <div className='col-6'>
                    <Form.Group className="mb-3">
                        <Form.Label>Hobbies</Form.Label>
                        <Form.Control type="text" placeholder="Enter hobbies"
                            value={hobbies}
                            onChange={(e) => setHobbies(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control type="text" placeholder="Enter skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Favorite Quote</Form.Label>
                        <Form.Control type="text" placeholder="Enter fav quote"
                            value={favouriteQuote}
                            onChange={(e) => setFavorite_quote(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Alternate Profession</Form.Label>
                        <Form.Control type="text" placeholder="Enter alternate profession"
                            value={alternateProfession}
                            onChange={(e) => setAlternate_profession(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Assigned Manager</Form.Label>
                        <Form.Control type="text" placeholder="Enter manager"
                            value={assignedManager}
                            onChange={(e) => setAssigned_manager(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Assigned IBU</Form.Label>
                        <Form.Control type="text" placeholder="Enter ibu"
                            value={assignedIBU}
                            onChange={(e) => setAssigned_ibu(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleClick} className='btnSubmit'>
                        Submit
                    </Button>
                </div>


            </Form>

        </div>
    );
}

export default EmployeeForm;
