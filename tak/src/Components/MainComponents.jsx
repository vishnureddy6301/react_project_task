import React, { useState } from 'react';
import Norecord from './Norecord';
import Table1 from './Table1';
import Table2 from './Table2';
import { Button } from 'react-bootstrap';
import '../App.css'

export const AppContext = React.createContext();

const MainComponents = () => {
  const [students] = useState([
    { name: 'mahesh', age: '22', status: 'Active', enrolledIn: 'react', marks: '89' },
    { name: 'vishnu', age: '21', status: 'Active', enrolledIn: 'java', marks: '90' },
    { name: 'hari', age: '23', status: 'InActive', enrolledIn: 'cloud', marks: '70' },
    { name: 'saran', age: '24', status: 'InActive', enrolledIn: 'python', marks: '98' },
    { name: 'siva', age: '25', status: 'Active', enrolledIn: 'c', marks: '95' }
  ]);

  const [showTable1, setShowTable1] = useState(false);
  const [showNoRecord, setShowNoRecord] = useState(false);
  const [showTable2, setShowTable2] = useState(false);

  const handleButton1Click = () => {
    setShowTable1(true);
    setShowNoRecord(false);
    setShowTable2(false);
  };

  const handleButton2Click = () => {
    setShowTable1(false);
    setShowNoRecord(true);
    setShowTable2(false);
  };

  const handleButton3Click = () => {
    setShowTable1(false);
    setShowNoRecord(false);
    setShowTable2(true);
  };

  return (
    <AppContext.Provider value={{ students }}>
      <div>
        <Button onClick={handleButton1Click}>Show Table 1</Button>
        <Button onClick={handleButton2Click}>Show No Record</Button>
        <Button onClick={handleButton3Click}>Show Table 2</Button>
        {showTable1 && <Table1 students={students} />}
      {showNoRecord && <Norecord />}
      {showTable2 && <Table2 students={students} />}
      </div>
    </AppContext.Provider>
  );
};

export default MainComponents;
