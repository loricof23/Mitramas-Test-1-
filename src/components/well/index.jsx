import React from 'react';
import './well.css';

const Well = (props) => {
    return ( 
      <div className="well flex justify-between">
        <div className="mr-10">{props.logo}</div>
        <div>
          <div className ="font-bold">{props.angka}</div>
          <div className ="text-sm">{props.detail}</div>
        </div>
      </div>
      
    )
};

export default Well;