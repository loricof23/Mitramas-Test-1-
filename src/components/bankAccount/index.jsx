import React from 'react';

const BankAccount = (props) => {
    return ( 
      <div className="flex justify-between mb-5">
        <div>{props.gambar}</div>
        <div className='w-44'>
          <div className='font-bold'>{props.namaBank}</div>
          <div className='text-sm text-gray-700 mt-4'>{props.namaAkun}</div>
          <div className='text-sm text-gray-700 mt-2'>{props.mataUang}</div>
        </div>
        <div>
          <span className='text-xs text-green-500 mr-1' >{props.edit}</span>
          <span className='text-xs text-red-500'>{props.delete}</span>
        </div>
       
      </div>
      
    )
};

export default BankAccount;