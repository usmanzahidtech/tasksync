import React, { useState } from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import Alltask from '../Others/AllTasks'

const AdminDashboard = (props) => {
  // Local state so AllTasks re-renders immediately on task creation
  const [employees, setEmployees] = useState(props.employees || []);

  const handleTaskCreated = (updatedEmployees) => {
    setEmployees(updatedEmployees);
  };

  return (
    <div className='min-h-screen w-full p-5 md:p-10 bg-[#111]'>
      <Header changeUser={props.changeUser} />
      <CreateTask employees={employees} onTaskCreated={handleTaskCreated} />
      <Alltask employees={employees} />
    </div>
  )
}

export default AdminDashboard