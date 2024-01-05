import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

function EmployeeList() {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/employee/get")
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    const handleViewDeck = (empId) => {
        navigate(`/welcomeDeck/${empId}`);
    };



    return (
        <div className="container mt-4">
            <div className='list-row1'>
                <Link to='/form' className='decks'>Go to Form</Link>
                <h1 className="mb-4">Employee List</h1>
                <Link to='/templates' className='decks'>View All Decks</Link>
            </div>
            <div className="row">
                {employees.map(employee => (
                    <div key={employee.emp_id} className="col-md-4 mb-4">
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title className="card-title">{employee.name}</Card.Title>
                                <Card.Text className="card-text">
                                    Employee ID: {employee.emp_id}
                                </Card.Text>
                                <div className='btns'>
                                    <Button variant="primary" onClick={() => handleViewDeck(employee.emp_id)}>
                                        View Deck
                                    </Button>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeList;
