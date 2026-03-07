import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className='h-full shrink-0 w-[300px] p-5 bg-red-600 rounded-xl flex flex-col justify-between shadow-md'>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <span className='bg-red-900 text-white text-xs px-3 py-1 rounded-full font-medium'>{data.category}</span>
                    <span className='text-xs text-red-200'>{data.taskDate}</span>
                </div>
                <h2 className='text-lg font-bold text-white'>{data.taskTitle}</h2>
                <p className='text-sm mt-2 text-red-200 leading-relaxed'>{data.taskDescription}</p>
            </div>
            <div className='mt-4'>
                <span className='text-xs font-semibold text-red-300 uppercase mb-2 block'>Failed</span>
                <div className='w-full bg-red-900 text-white text-center py-2 rounded-lg text-sm font-semibold'>
                    ❌ Failed
                </div>
            </div>
        </div>
    );
};

export default FailedTask;
