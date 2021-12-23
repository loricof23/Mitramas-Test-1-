import React from 'react';

const Activity = (props) => {
    return ( 
      <div className="">
        <div className='text-base'>{props.kegiatan}</div>
        <div className='text-xs text-gray-500 mb-3'>{props.tanggal}</div>
      </div>
      
    )
};

export default Activity;