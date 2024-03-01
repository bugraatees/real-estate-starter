import React from 'react';

import {Link} from 'react-router-dom';


function Header() {
  return (
    <header className='py-6 mb-12 border-b flex justify-between items-center'>
      <div className='container mx-auto '>
        <h1 className='text-violet-900 text-3xl font-bold'>BUGRAATES</h1>
      </div>
      <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to=''>Giriş Yap</Link>
        <Link className='bg-violet-800 hover:bg-violet-800 px-4 py-3 rounded-lg transition' to=''>Üye Ol</Link>
      </div>
    </header>

  );
};

export default Header;
