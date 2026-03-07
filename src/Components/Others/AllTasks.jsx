import React from 'react'

const COLS = [
  { key: 'newTask', label: 'NEW', cls: 'text-blue-400' },
  { key: 'active', label: 'ACTIVE', cls: 'text-orange-400' },
  { key: 'completed', label: 'DONE', cls: 'text-emerald-400' },
  { key: 'failed', label: 'FAILED', cls: 'text-red-400' },
];

const Alltask = ({ employees }) => {

  if (!employees || employees.length === 0) {
    return <div className='text-gray-500 text-center mt-10'>No employee data available.</div>;
  }

  return (
    <div className='bg-[#1c1c1c] rounded-xl mt-5 shadow-lg overflow-hidden'>
      {/* 
          Standard pattern for data-dense tables on mobile:
          Outer container with overflow-x-auto, Inner container with min-width.
      */}
      <div className='overflow-x-auto p-2 scrollbar-hide'>
        <div className='min-w-[700px]'>
          {/* Header Row */}
          <div className='grid grid-cols-5 bg-[#2a2a2a] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400 rounded-lg mb-2'>
            <span>Employee</span>
            {COLS.map(c => <span key={c.key} className='text-center'>{c.label}</span>)}
          </div>

          {/* Employee Rows */}
          <div className='flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-1'>
            {employees.map((emp, idx) => (
              <div
                key={idx}
                className='grid grid-cols-5 px-5 py-4 border border-gray-800 rounded-lg hover:bg-[#242424] transition-all duration-300 items-center'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-sm font-bold text-white shadow-sm'>
                    {emp.firstname?.[0] ?? '?'}
                  </div>
                  <span className='font-medium text-white truncate'>{emp.firstname}</span>
                </div>
                {COLS.map(c => (
                  <span key={c.key} className={`flex justify-center items-center font-bold text-lg ${c.cls}`}>
                    {emp.taskCounts?.[c.key] ?? 0}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alltask;