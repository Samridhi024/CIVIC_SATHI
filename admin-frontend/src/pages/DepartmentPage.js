import React from 'react';
import {Table,Dropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {departments} from '../lib/departments';

const DepartmentsPage =()=>{
    const navigate = useNavigate();

    const handleViewIssues =(departmentName)=>{
        const encodedDeptName = encodeURIComponent(departmentName);
        navigate(`/issues?department=${encodedDeptName}`);
    };

    return (
        <div className="departments-page">
            <h2 className="main-title">Departments Directory</h2>
            <p className="subtitle">List of all municipal departments and their contact information.</p>
            
            <Table hover responsive className="departments-table mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Department ID</th>
                        <th>Department Name</th>
                        <th>Email Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((dept, index) => (
                        <tr key={dept.id}>
                            <td>{index + 1}</td>
                            <td>{dept.id}</td>
                            <td>{dept.name}</td>
                            <td><a href={`mailto:${dept.email}`}>{dept.email}</a></td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" className="action-toggle">
                                        <i className="bi bi-three-dots"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item href="#">
                                            <i className="bi bi-pencil-fill me-2"></i> Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleViewIssues(dept.name)}>
                                            <i className="bi bi-eye-fill me-2"></i> View Associated Issues
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DepartmentsPage;
