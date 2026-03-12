import React from 'react'
import AcceptTasks from './AcceptTasks'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, onUpdate }) => {

    if (!data?.tasks || data.tasks.length === 0) {
        return (
            <div className='h-[55%] flex items-center justify-center mt-10'>
                <p className='text-gray-500 text-lg'>No tasks assigned yet.</p>
            </div>
        );
    }

    return (
        <div id='Tasklist' className='h-[50%] md:h-[55%] py-5 overflow-y-auto md:overflow-x-auto flex flex-col md:flex-row items-center md:items-start justify-start gap-5 w-full mt-10'>
            {data.tasks.map((elem, idx) => {
                const props = { key: idx, data: elem, employeeEmail: data.email, onUpdate };
                if (elem.newTask) return <NewTask       {...props} />;
                if (elem.active) return <AcceptTasks   {...props} />;
                if (elem.completed) return <CompleteTask  {...props} />;
                if (elem.failed) return <FailedTask    {...props} />;
                return null;
            })}
        </div>
    );
};

export default TaskList;