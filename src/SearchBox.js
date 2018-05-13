import React from 'react';

const SearchBox = ({searchfeild, searchChange})=>{
  return (
    <div className='pa2'>
      <input
      className='pa3 b--green bg-light-blue'
      type='search'
      placeholder='Serach friends'
      onChange= {searchChange}
      />
    </div>
  );
}
export default SearchBox;
