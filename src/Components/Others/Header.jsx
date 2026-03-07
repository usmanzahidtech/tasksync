import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    props.changeUser(null);
  };

  const username = props.data?.firstname || 'Admin';
  const isAdmin = !props.data?.email;

  return (
    <div className='flex items-center justify-between py-2'>
      <div>
        <p className='text-sm text-gray-400'>Welcome back,</p>
        <h1 className='text-3xl font-bold text-white'>
          {username}
          {isAdmin && <span className='ml-2 text-sm font-normal bg-emerald-600 text-white px-2 py-0.5 rounded-full align-middle'>Admin</span>}
        </h1>
      </div>
      <button
        onClick={logOutUser}
        className='bg-red-600 hover:bg-red-500 active:scale-95 transition-all font-medium text-white px-5 py-2 rounded-lg text-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;