import React from 'react';
import SearchBar from '../components/searchbar'

export default function Page() {
  
  return (
    <>
    <div className="flex justify-center items-center ">
    <h1 className="text-2xl font-bold">FlixDB</h1>
    </div>
    <div className="flex justify-center items-center mt-4">
        <SearchBar />
      </div>
    
    </>
    
  );
}
