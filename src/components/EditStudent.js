import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EditStudent = ({ student, updateStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [rollNo, setRollNo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (student) {
      setName(student.name);
      setAge(student.age);
      setMobile(student.mobile);
      setDepartment(student.department);
      setYear(student.year);
      setRollNo(student.rollNo);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { rollNo, name, age, mobile, department, year };
    updateStudent(updatedStudent);
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
      <button type="submit">Update Student</button>
    </form>
  );
};

export default EditStudent;
