import React from 'react'

const Loader = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-[#111]'>
            <div className='flex flex-col items-center gap-4'>
                {/* Animated Spinner */}
                <div className='w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin'></div>

                {/* Text */}
                <p className='text-emerald-500 font-medium tracking-widest text-sm uppercase animate-pulse'>
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loader
