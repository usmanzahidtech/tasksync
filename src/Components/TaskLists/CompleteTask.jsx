import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className='h-full shrink-0 w-[300px] p-5 bg-emerald-500 rounded-xl flex flex-col justify-between shadow-md'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='bg-emerald-800 text-white text-xs px-3 py-1 rounded-full font-medium'>{data.category}</span>
                    <span className='text-xs text-emerald-100'>{data.taskDate}</span>
                </div>
                <h2 className='text-lg font-bold text-white'>{data.taskTitle}</h2>
                <p className='text-sm mt-2 text-emerald-100 leading-relaxed'>{data.taskDescription}</p>
            </div>
            <div className='mt-4'>
                <span className='text-xs font-semibold text-emerald-200 uppercase mb-2 block'>Completed</span>
                <div className='w-full bg-emerald-700 text-white text-center py-2 rounded-lg text-sm font-semibold'>
                    ✅ Done
                </div>
            </div>
        </div>
    );
};

export default CompleteTask;
