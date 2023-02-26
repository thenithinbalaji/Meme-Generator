import React from 'react';
import ReactDOM from 'react-dom/client';

import NavBar from './components/NavBar';
import MainBody from './components/MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='w-full h-max 2xl:h-screen flex flex-col justify-center py-16 px-4'>
    <div className='mx-auto'>
      <NavBar />
      <MainBody />
    </div>
  </div>
);