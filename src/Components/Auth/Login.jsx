import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(Email,password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen justify-center items-center bg-black'>
            <div className='border-2 border-emerald-600 p-8 rounded-2xl shadow-[0_0_30px_-5px_theme(colors.emerald.600)] w-96 backdrop-blur-sm bg-black/50'>
                <h2 className='text-3xl font-bold text-center text-white mb-6 uppercase tracking-wider'>
                    Login
                </h2>

                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center gap-4'
                >
                    <input
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full text-white bg-transparent placeholder:text-emerald-100/50 border-2 border-emerald-600 rounded-xl py-3 px-4 text-lg outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300'
                        type="email"
                        placeholder='Username'
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='w-full text-white bg-transparent placeholder:text-emerald-100/50 border-2 border-emerald-600 rounded-xl py-3 px-4 text-lg outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300'
                        type="password"
                        placeholder='Password'
                    />

                    <button
                        className='w-full mt-2 text-white font-semibold bg-emerald-600 border-2 border-emerald-600 rounded-xl py-3 text-lg hover:bg-emerald-700 hover:border-emerald-700 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald-900/50'
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
