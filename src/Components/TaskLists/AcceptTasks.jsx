import React from 'react'

const updateTaskInStorage = (employeeEmail, taskTitle, updates) => {
    const stored = JSON.parse(localStorage.getItem('employees')) || [];
    return stored.map((emp) => {
        if (emp.email !== employeeEmail) return emp;
        const updatedTasks = emp.tasks.map((t) =>
            t.taskTitle === taskTitle ? { ...t, ...updates } : t
        );
        const taskCounts = {
            newTask: updatedTasks.filter(t => t.newTask && !t.active && !t.completed && !t.failed).length,
            active: updatedTasks.filter(t => t.active && !t.completed && !t.failed).length,
            completed: updatedTasks.filter(t => t.completed).length,
            failed: updatedTasks.filter(t => t.failed).length,
        };
        return { ...emp, tasks: updatedTasks, taskCounts };
    });
};

const AcceptTasks = ({ data, employeeEmail, onUpdate }) => {

    const handleComplete = () => {
        const updated = updateTaskInStorage(employeeEmail, data.taskTitle, {
            active: false, completed: true, failed: false, newTask: false,
        });
        localStorage.setItem('employees', JSON.stringify(updated));
        if (onUpdate) onUpdate(updated);
    };

    const handleFailed = () => {
        const updated = updateTaskInStorage(employeeEmail, data.taskTitle, {
            active: false, failed: true, completed: false, newTask: false,
        });
        localStorage.setItem('employees', JSON.stringify(updated));
        if (onUpdate) onUpdate(updated);
    };

    return (
        <div className='h-full shrink-0 w-full md:w-[300px] p-5 bg-orange-500 rounded-xl flex flex-col justify-between shadow-md'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='bg-orange-800 text-white text-xs px-3 py-1 rounded-full font-medium'>{data.category}</span>
                    <span className='text-xs text-orange-100'>{data.taskDate}</span>
                </div>
                <h2 className='text-lg font-bold text-white'>{data.taskTitle}</h2>
                <p className='text-sm mt-2 text-orange-100 leading-relaxed'>{data.taskDescription}</p>
            </div>
            <div className='mt-4'>
                <span className='text-xs font-semibold text-orange-200 uppercase mb-2 block'>In Progress</span>
                <div className='flex gap-2'>
                    <button
                        onClick={handleComplete}
                        className='flex-1 bg-green-500 hover:bg-green-400 active:scale-95 transition-all py-2 px-2 text-xs font-semibold rounded-lg'
                    >
                        ✅ Complete
                    </button>
                    <button
                        onClick={handleFailed}
                        className='flex-1 bg-red-600 hover:bg-red-500 active:scale-95 transition-all py-2 px-2 text-xs font-semibold rounded-lg'
                    >
                        ❌ Failed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AcceptTasks;
