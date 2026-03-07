import React from 'react'

const COLS = [
  { key: 'newTask', label: 'New', cls: 'text-blue-400' },
  { key: 'active', label: 'Active', cls: 'text-orange-400' },
  { key: 'completed', label: 'Done', cls: 'text-emerald-400' },
  { key: 'failed', label: 'Failed', cls: 'text-red-400' },
];

const Alltask = ({ employees }) => {

  if (!employees || employees.length === 0) {
    return <div className='text-gray-500 text-center mt-10'>No employee data available.</div>;
  }

  return (
    <div className='bg-[#1c1c1c] rounded-xl mt-5 overflow-hidden shadow-lg'>
      {/* Header Row */}
      <div className='grid grid-cols-5 bg-[#2a2a2a] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400'>
        <span>Employee</span>
        {COLS.map(c => <span key={c.key} className='text-center'>{c.label}</span>)}
      </div>

      {/* Employee Rows */}
      {employees.map((emp, idx) => (
        <div
          key={idx}
          className='grid grid-cols-5 px-5 py-4 border-t border-gray-800 hover:bg-[#242424] transition-colors'
        >
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm font-bold text-white'>
              {emp.firstname?.[0] ?? '?'}
            </div>
            <span className='font-medium text-white'>{emp.firstname}</span>
          </div>
          {COLS.map(c => (
            <span key={c.key} className={`flex justify-center items-center font-semibold text-lg ${c.cls}`}>
              {emp.taskCounts?.[c.key] ?? 0}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Alltask;