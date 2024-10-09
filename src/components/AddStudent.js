import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [rollNo, setRollNo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { rollNo, name, age, mobile, department, year };
    addStudent(newStudent);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
