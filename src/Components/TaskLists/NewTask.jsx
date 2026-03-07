import React from 'react'

// Helper: Update a specific task for an employee in localStorage and return updated employees
const updateTaskInStorage = (employeeEmail, taskTitle, updates) => {
    const stored = JSON.parse(localStorage.getItem('employees')) || [];
    return stored.map((emp) => {
        if (emp.email !== employeeEmail) return emp;

        const updatedTasks = emp.tasks.map((t) =>
            t.taskTitle === taskTitle ? { ...t, ...updates } : t
        );

        // Recompute taskCounts from updated tasks
        const taskCounts = {
            newTask: updatedTasks.filter(t => t.newTask && !t.active && !t.completed && !t.failed).length,
            active: updatedTasks.filter(t => t.active && !t.completed && !t.failed).length,
            completed: updatedTasks.filter(t => t.completed).length,
            failed: updatedTasks.filter(t => t.failed).length,
        };

        return { ...emp, tasks: updatedTasks, taskCounts };
    });
};

const NewTask = ({ data, employeeEmail, onUpdate }) => {

    const handleAccept = () => {
        const updated = updateTaskInStorage(employeeEmail, data.taskTitle, {
            newTask: false,
            active: true,
        });
        localStorage.setItem('employees', JSON.stringify(updated));
        if (onUpdate) onUpdate(updated);
    };

    return (
        <div className='h-full shrink-0 w-[300px] p-5 bg-blue-500 rounded-xl flex flex-col justify-between shadow-md'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='bg-blue-800 text-white text-xs px-3 py-1 rounded-full font-medium'>{data.category}</span>
                    <span className='text-xs text-blue-100'>{data.taskDate}</span>
                </div>
                <h2 className='text-lg font-bold text-white'>{data.taskTitle}</h2>
                <p className='text-sm mt-2 text-blue-100 leading-relaxed'>{data.taskDescription}</p>
            </div>
            <div className='mt-4'>
                <span className='text-xs font-semibold text-blue-200 uppercase mb-2 block'>New Task</span>
                <button
                    onClick={handleAccept}
                    className='bg-white text-blue-600 hover:bg-blue-100 active:scale-95 transition-all py-2 px-4 text-sm font-semibold w-full rounded-lg'
                >
                    ✅ Accept Task
                </button>
            </div>
        </div>
    );
};

export default NewTask;
