import React, { useState } from 'react'

const CreateTask = ({ employees, onTaskCreated }) => {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateTask = (e) => {
        e.preventDefault();

        if (!taskTitle || !taskDate || !assignTo || !category || !description) {
            alert('Sab fields fill karo pehle!');
            return;
        }

        const newTask = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle,
            taskDescription: description,
            taskDate,
            category,
        };

        // Pull current employees from localStorage, update and save
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        const updatedEmployees = storedEmployees.map((emp) => {
            if (emp.firstname === assignTo) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, newTask],
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: emp.taskCounts.newTask + 1,
                    },
                };
            }
            return emp;
        });

        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Reset form
        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
        setDescription('');

        // Notify parent to re-render AllTasks
        if (onTaskCreated) onTaskCreated(updatedEmployees);

        alert(`Task "${taskTitle}" successfully assigned to ${assignTo}!`);
    };

    return (
        <div className='p-6 bg-[#1C1C1C] mt-6 rounded-xl shadow-lg'>
            <h2 className='text-xl font-semibold text-white mb-5'>Create New Task</h2>
            <form
                onSubmit={handleCreateTask}
                className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'
            >
                {/* Left Column */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wider'>Task Title</label>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] border border-gray-600 focus:border-emerald-500 text-white transition'
                            type='text'
                            placeholder='e.g. UI Design'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wider'>Due Date</label>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] border border-gray-600 focus:border-emerald-500 text-white transition'
                            type='date'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wider'>Assign To</label>
                        <select
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] border border-gray-600 focus:border-emerald-500 text-white transition cursor-pointer'
                        >
                            <option value='' disabled>Select Employee</option>
                            {employees?.map((emp, idx) => (
                                <option key={idx} value={emp.firstname}>{emp.firstname}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-xs font-medium text-gray-400 uppercase tracking-wider'>Category</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2a2a2a] border border-gray-600 focus:border-emerald-500 text-white transition'
                            type='text'
                            placeholder='e.g. Design, Development'
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className='flex flex-col gap-1'>
                    <label className='text-xs font-medium text-gray-400 uppercase tracking-wider'>Task Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='text-sm flex-1 py-2 px-3 w-full h-full min-h-[200px] rounded-lg outline-none bg-[#2a2a2a] border border-gray-600 focus:border-emerald-500 text-white transition resize-none'
                        placeholder='Describe the task in detail...'
                    />
                    <button
                        type='submit'
                        className='mt-4 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all py-3 px-5 rounded-lg text-sm font-semibold text-white w-full'
                    >
                        ✅ Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
