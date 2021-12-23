import React from 'react';

const Relation = (props) => {
    return ( 
      <div className="flex">
        <div className="mr-4">{props.logo}</div>
        <div>
          <div className='font-bold'>{props.angka}</div>
          <div className='text-sm text-gray-700 mb-3'>{props.detail}</div>
        </div>
      </div>
      
    )
};

export default Relation;