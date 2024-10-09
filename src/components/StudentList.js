import React from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students, deleteStudent, setEditingStudent }) => {
  return (
    <div>
      <h2>Student List</h2>
      <Link to="/add">Add Student</Link>
      <ul>
        {students.map(student => (
          <li key={student.rollNo}>
            {student.name} - {student.age} - {student.mobile} - {student.department} - {student.year} - {student.rollNo}
            <Link to="/edit" onClick={() => setEditingStudent(student)}>Edit</Link>
            <button onClick={() => deleteStudent(student.rollNo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
