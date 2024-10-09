
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import './App.css'; 

function App() {
  

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((student) =>
      student.rollNo === updatedStudent.rollNo ? updatedStudent : student
    ));
    setEditingStudent(null);
  };

  const deleteStudent = (rollNo) => {
    setStudents(students.filter((student) => student.rollNo !== rollNo));
  };

  // App.js
return (
  <Router>
    <div className="container">
      <h1>Student Details</h1>
      <Routes>
        <Route path="/" element={<StudentList students={students} deleteStudent={deleteStudent} setEditingStudent={setEditingStudent} />} />
        <Route path="/add" element={<AddStudent addStudent={addStudent} />} />
        <Route path="/edit" element={<EditStudent student={editingStudent} updateStudent={updateStudent} />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;



