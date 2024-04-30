import React from 'react'; // Corrected import statement

const Table1 = ({ students }) => { // Changed 'student' to 'students' for consistency
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Enrolled In</th> {/* Corrected typo */}
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => ( // Changed 'student' to 'students' for consistency
            <tr key={index}> {/* Changed 'Key' to 'key' */}
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

export default Table1;
