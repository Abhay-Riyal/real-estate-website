import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader color={'#334155'}  size={60} />
    </div>
  );
}

export default Loader;
