import React, { useState } from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskLists/TaskList'

const EmployeeDashboard = (props) => {
  // Hold live employee data in local state so task actions trigger re-renders
  const [employeeData, setEmployeeData] = useState(props.data);

  const handleTaskUpdate = (updatedAllEmployees) => {
    // Find and update just this employee's data
    const fresh = updatedAllEmployees.find(e => e.email === employeeData?.email);
    if (fresh) {
      setEmployeeData(fresh);
      // Also save the updated session to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'Employee', data: fresh }));
    }
  };

  return (
    <div className='p-6 md:p-10 bg-[#1C1C1C] min-h-screen'>
      <Header changeUser={props.changeUser} data={employeeData} />
      <TaskListNumbers data={employeeData} />
      <TaskList data={employeeData} onUpdate={handleTaskUpdate} />
    </div>
  );
};

export default EmployeeDashboard;