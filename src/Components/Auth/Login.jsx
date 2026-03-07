import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(Email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen justify-center items-center bg-black p-4'>
            <div className='border-2 border-emerald-600 p-8 rounded-2xl shadow-[0_0_30px_-5px_theme(colors.emerald.600)] w-full max-w-[420px] backdrop-blur-sm bg-black/50'>
                <h2 className='text-3xl font-bold text-center text-white mb-8 uppercase tracking-wider'>
                    Login
                </h2>

                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center gap-5'
                >
                    <div className='w-full'>
                        <input
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full text-white bg-transparent placeholder:text-emerald-100/30 border-2 border-emerald-600 rounded-xl py-3 px-5 text-lg outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300'
                            type="email"
                            placeholder='Email address'
                        />
                    </div>

                    <div className='w-full'>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full text-white bg-transparent placeholder:text-emerald-100/30 border-2 border-emerald-600 rounded-xl py-3 px-5 text-lg outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300'
                            type="password"
                            placeholder='Password'
                        />
                    </div>

                    <button
                        className='w-full mt-4 text-white font-bold bg-emerald-600 border-2 border-emerald-600 rounded-xl py-4 text-lg hover:bg-emerald-700 hover:border-emerald-700 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-emerald-900/50 uppercase tracking-widest'
                        type='submit'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
