import '../assests/css/tailwind.css';
import './screen.css';

import Button from '../components/button/';
import Well from '../components/well';
import BankAccount from '../components/bankAccount';
import Relation from '../components/relation';
import Activity from '../components/activity';
import Profile from '../components/profile';
import logo from '../components/profile/logo.jpg';
import avatar from '../components/profile/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faBell} from '@fortawesome/free-solid-svg-icons';
import { faHouseUser} from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt} from '@fortawesome/free-solid-svg-icons';
import { faClipboardCheck} from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt} from '@fortawesome/free-solid-svg-icons';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { faBuffer} from '@fortawesome/free-brands-svg-icons';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { faVectorSquare} from  '@fortawesome/free-solid-svg-icons';
import { faSearchDollar } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div className="app bg-gray-200">
        <div className='fixed bg-white border-gray-400 rounded-sm p-4 drop-shadow-lg pb-96'>
          <img src={logo} alt="" className='w-8 mt-4'/>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faHouseUser}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faTicketAlt}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faClipboardCheck}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faStoreAlt}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faBuilding}/>}</div>
          <div className='mt-9 text-center text-gray-400'>{<FontAwesomeIcon icon={faUserFriends}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faBuffer}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faBox}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faVectorSquare}/>}</div>
          <div className='mt-5 text-center text-gray-400'>{<FontAwesomeIcon icon={faSearchDollar}/>}</div>
          <div className='mt-9 text-center text-gray-400'>{<FontAwesomeIcon icon={faSearchDollar}/>}</div>
        </div>

        <div className="container  p-4 mr-1 mx-auto">
          <div className="header flex justify-between mb-7">
            <div>
              <span className='text-xs text-gray-500 mr-2'>Perusahaan</span>
              <span className='text-xs mr-2 font-extrabold'> {<FontAwesomeIcon icon={faChevronRight} />}</span>
              <span className='text-xs'>Mitramas Infosys Global</span>        
            </div>
            <div className='flex'>
              <div className='text-xs mr-3'> {<FontAwesomeIcon icon={faSearch}/>}</div>
              <div className='text-xs mr-6'> {<FontAwesomeIcon icon={faBell}/>}</div>
              <div className=' mr-1 h-4 w-4 mt-0.1  rounded-full border border-gray-400 overflow-hidden'>
                <img src={avatar} alt=""/>
              </div>
              <div className='text-xs mr-2'> John Doe </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="left-side w-1/4 mr-4 bg-white border-gray-400 rounded-sm h-100 drop-shadow-lg ">
              <Profile
                namaPerusahaan="Mitramas Infosys Global"
                category="Layanan IT"
                singkatan="MIG"
                alamat="Jl. Tebet Raya No.42, Jakarta Selatan"
                nama="John Doe"
                tanggal="3 Maret 2021"
                email="mig@mitrasolusi.group"
                nomorTelpon="021-5678-1234"
                situs="mitramas.com"
              />
            </div>

            <div className='right-side w-3/4 pl-2'>
              <div className=''>
                <div className="bg-white border-gray-400 rounded-sm p-5 pb-5 mb-7 drop-shadow-lg">
                  <div className="flex justify-between">
                    <span className='font-bold'>Lokasi</span>
                    <Button type="link">Lihat Semua</Button>
                  </div>

                  <div className="flex justify-between p-1 mt-2">
                    <Well
                      logo ={<FontAwesomeIcon icon={faBuilding} />}
                      angka="20"
                      detail="Induk"
                    />
                    <Well 
                      logo={<FontAwesomeIcon icon={faWrench} />}
                      angka="3"
                      detail="Sub Lokasi Level 1"
                      />

                    <Well  
                      logo={<FontAwesomeIcon icon={faWarehouse} />}
                      angka="1"
                      detail="Sub Lokasi Level 2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between" >
                    <div className='w-3/5 mr-10'>
                      <div className="bg-white border-gray-400 rounded-sm p-5 pb-5 mb-7 drop-shadow-lg  ">
                        <div className="flex justify-between">
                          <span className='font-bold'>Akun Bank</span>
                          <Button> {<FontAwesomeIcon icon={faPlus} />}Tambah Akun Bank</Button>
                        </div>
                        
                        <div className=" mt-5 justify-between p1">
                          <BankAccount
                          gambar={<FontAwesomeIcon icon={faCreditCard} />}
                          namaBank="Bank KB Bukopin"
                          namaAkun="****0879 - Yusron Taufiq" 
                          mataUang="idr"
                          edit={<FontAwesomeIcon icon={faEdit} />}
                          delete={<FontAwesomeIcon icon={faTrashAlt} />} />

                          <BankAccount
                          gambar={<FontAwesomeIcon icon={faCreditCard} />}
                          namaBank="Citibank, NA"
                          namaAkun="****5525 - Anton" 
                          mataUang="USD "
                          edit={<FontAwesomeIcon icon={faEdit} />}
                          delete={<FontAwesomeIcon icon={faTrashAlt} />} />

                        </div>
                      </div>
                      <div className="bg-white border-gray-400 rounded-sm p-5 pb-5 drop-shadow-lg">
                        <div className="flex justify-between">
                          <span className='font-bold'>Relasi</span>
                          <Button type="link">Lihat Semua</Button>
                        </div>

                        <div className="mt-5 mb-7 justify-between p-1">
                          <Relation 
                            logo={<FontAwesomeIcon icon={faShareAlt} />}
                            angka="20"
                            detail="memiliki"
                          />
                          <Relation 
                            logo={<FontAwesomeIcon icon={faShareAlt} />}
                            angka="108"
                            detail="menggunakan"
                          />
                          <Relation 
                            logo={<FontAwesomeIcon icon={faShareAlt} />}
                            angka="67"
                            detail="meminjam"
                          />
                          </div>
                      </div>
                    </div>
                    <div className="bg-white border-gray-400 rounded-sm p-5 ml-2 drop-shadow-lg w-2/4 ">
                      <div className="flex justify-between">
                        <span className='font-bold'>Aktivitas</span>
                      
                      </div>

                      <div className="mt-4 justify-between">
                        <Activity 
                          kegiatan="Menambahkan lokasi baru"
                          tanggal="Hari ini, 09,00"
                        />
                        <Activity 
                          kegiatan="Menghapus lokasi baru"
                          tanggal="Hari ini, 09,00"
                        />
                        <Activity 
                          kegiatan="Melalukan perubahan Profile"
                          tanggal="Hari ini, 09,00"
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
);

}


export default App;
