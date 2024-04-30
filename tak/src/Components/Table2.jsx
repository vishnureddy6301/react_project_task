
import React, { useContext } from 'react';
import { AppContext } from './MainComponents';

const Table2= () => {
  const { students } = useContext(AppContext);

  return (
    <div>
      <h2>Table 2</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Enrolled In</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.status}</td>
              <td>{student.enrolledIn}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
