import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import cover from './cover.jpg';
import profile from './profile.jpg';


const Profile = (props) => {
    return ( 
      <Fragment>
        <div className='image'>
          <img src={cover} className='absolute h-28 w-96'/>

          <div className='relative top-12 w-44 left-16 rounded-full border border-gray-300 overflow-hidden'>
            <img src={profile} />
          </div>
        </div>
        <div className='details px-6 my-5 mt-16'>
          <div className='name font-bold text-center'>{props.namaPerusahaan}</div>
          <div className='category text-xs text-gray-500 text-center mb-4'> {props.category} </div>
          <div className='edit text-sm text-green-700 text-center'> {<FontAwesomeIcon icon={faEdit} />} Sunting Profile</div>
        </div>
        <div className='px-6'>
          <div className='mb-4'>
            <div className='status text-xs text-gray-500 mb-2'>Status Perusahaan</div>
            <div className='flex justify-between'>
              <div className='detail-status text-sm text-green-700 font-bold'>Aktif</div>
              <div className='edit text-sm text-green-700'> {<FontAwesomeIcon icon={faToggleOn} />}</div>
            </div>
          </div>
          <div className='mb-4'>
            <div className='singkatan text-xs text-gray-500 mb-2'>Singkatan</div>
            <div className='detail-singkatan text-sm'>{props.singkatan}</div>
          </div>
          <div className='mb-4'>
            <div className='alamat text-xs text-gray-500 mb-2'>Alamat Perusahaan</div>
            <div className='detail-alamat text-sm'>{props.alamat} </div>
          </div>
          <div className='mb-4'>
            <div className='penanggung-jawab text-xs text-gray-500 mb-2'>Penanggung Jawab (PIC) </div>
            <div className='detail-penanggung-jawab text-sm'>{props.nama}</div>
          </div>
          <div className='mb-4'>
            <div className='tanggal text-xs text-gray-500 mb-2'>Tanggal PKP </div>
            <div className='detail-tanggal text-sm'>{props.tanggal}</div>
          </div>
          <div className='mb-4'>
            <div className='email text-xs text-gray-500 mb-2'>Email </div>
            <div className='flex'>
              <div className='detail-email text-sm text-green-700 mr-2'>{<FontAwesomeIcon icon={faEnvelope} />} </div>
              <div className='detail-email text-sm text-green-700 underline'>{props.email}</div>
            </div>
          </div>
        
          <div className='mb-4'>
            <div className='no-telp text-xs text-gray-500 mb-2'>No. Telp </div>
            <div className='flex'>
              <div className='detail-email text-sm text-green-700 mr-2'>{<FontAwesomeIcon icon={faPhone} />} </div>
              <div className='detail-no-telp text-sm text-green-700'>{props.nomorTelpon}</div>
            </div>
            </div>
          <div className='mb-4'>
            <div className='situs text-xs text-gray-500 mb-2'>Situs Web </div>
            <div className='flex'>
              <div className='detail-email text-sm text-green-700 mr-2'>{<FontAwesomeIcon icon={faGlobe} />} </div>
              <div className='detail-situs text-sm text-green-700 underline'>{props.situs}</div>
            </div>
          </div>
        </div>
    </Fragment>    
  )
};

export default Profile;