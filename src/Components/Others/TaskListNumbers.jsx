import React from 'react'

const STATS = [
    { key: 'newTask', label: 'New Tasks', bg: 'bg-blue-500', text: 'text-blue-100' },
    { key: 'active', label: 'In Progress', bg: 'bg-orange-500', text: 'text-orange-100' },
    { key: 'completed', label: 'Completed', bg: 'bg-emerald-500', text: 'text-emerald-100' },
    { key: 'failed', label: 'Failed', bg: 'bg-red-600', text: 'text-red-100' },
];

const TaskListNumbers = ({ data }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 mt-8 gap-4'>
            {STATS.map(({ key, label, bg, text }) => (
                <div key={key} className={`${bg} rounded-xl py-6 px-7 shadow-md`}>
                    <h2 className='text-4xl font-bold text-white'>{data?.taskCounts?.[key] ?? 0}</h2>
                    <h3 className={`text-sm font-medium mt-1 ${text}`}>{label}</h3>
                </div>
            ))}
        </div>
    );
};

export default TaskListNumbers;