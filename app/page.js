'use client';
import {BiSolidHome} from 'react-icons/bi';
import {BiSolidCartAlt} from 'react-icons/bi';
import {BiSolidBank} from 'react-icons/bi';
import {BiMessageAltDetail} from 'react-icons/bi';
import {BsFillPeopleFill} from 'react-icons/bs';
import {BsChevronDown} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {FiPlus} from 'react-icons/fi';
import {FaShapes} from 'react-icons/fa';
import {TbReportAnalytics} from 'react-icons/tb';
import {SiHomeassistantcommunitystore} from 'react-icons/si';
import {AiOutlineRight} from 'react-icons/ai';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiFillSetting} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {MdAddAlarm} from 'react-icons/md';
import {RiContactsBook2Fill} from 'react-icons/ri';
import {IoLogoWhatsapp} from 'react-icons/io';
import { useState } from 'react';

export default function Home() {

  const [open, setOpen] = useState(false);

  const Tab = ({name, children, icon}) => {
    return (
      <div className='flex justify-between items-center px-4 py-3 mt-4'>
        <div className='flex items-center'>
        <span className='text-white me-3'>{children}</span>
        <h2 className='text-white'>{name}</h2>
        </div>
        {icon && <span className='text-white'>{icon}</span>}
      </div>
    )
  }

  return (
    <main className='flex bg-[#E4E8EF] relative'>
      <div className='w-[10%] h-[150vh] bg-[#212934] justify-center md:!flex' style={{display: 'none'}}><AiOutlineMenu color='white' className='mt-3' size={35} onClick={() => setOpen(true)}/></div>
      <div className='w-[20%] md:w-[45%] md:h-full h-[100vh] bg-[#212934] md:hidden md:fixed md:top-0 md:left-0 ' style={{display: open ? 'block' : 'none'}}>
      {open && <AiOutlineMenu color='white' className='mt-3 ms-3' size={35} onClick={() => setOpen(false)}/>}
        <div className='text-white font-bold p-2 flex items-center'>
         <div className='bg-blue-400 p-2 rounded-full'><SiHomeassistantcommunitystore size={25}/></div> <h3 className='mx-2'>Machinery And Pa...</h3><AiOutlineRight />
        </div>
        <div className='p-2 flex justify-between bg-[#2A6561]'>
          <div className='mt-1'>
            <IoLogoWhatsapp size={25} className='text-[#5FBA4D]'/>
          </div>
          <div className='ms-3'>
          <span className='text-[#5FBA4D]'>Your Personal Messenger</span>
          <p className='text-white text-[13px]'>Integrate WhatsApp to automate transaction masseging.</p>
          </div>
        </div>
        <Tab name="Home"><BiSolidHome size={20}/></Tab>
        <div className='bg-black border-s-4 border-red-500'>
        <Tab name="Parties" icon={<FiPlus size={20}/>}><BsFillPeopleFill size={20}/></Tab>
        </div>
        <Tab name="Items" icon={<FiPlus size={20}/>}><FaShapes size={20}/></Tab>
        <Tab name="Sale" icon={<BsChevronDown size={15}/>}><TbReportAnalytics size={20}/></Tab>
        <Tab name="Purchase" icon={<BsChevronDown size={15}/>}><BiSolidCartAlt size={20}/></Tab>
        <Tab name="Cash & Bank" icon={<BsChevronDown size={15}/>}><BiSolidBank size={20}/></Tab>
      </div>

      <div className='w-[20%] h-[100vh] bg-[#212934] md:hidden'>
        <div className='text-white font-bold p-2 flex items-center'>
         <div className='bg-blue-400 p-2 rounded-full'><SiHomeassistantcommunitystore size={25}/></div> <h3 className='mx-2'>Machinery And Pa...</h3><AiOutlineRight />
        </div>
        <div className='p-2 flex justify-between bg-[#2A6561]'>
          <div className='mt-1'>
            <IoLogoWhatsapp size={25} className='text-[#5FBA4D]'/>
          </div>
          <div className='ms-3'>
          <span className='text-[#5FBA4D]'>Your Personal Messenger</span>
          <p className='text-white text-[13px]'>Integrate WhatsApp to automate transaction masseging.</p>
          </div>
        </div>
        <Tab name="Home"><BiSolidHome size={20}/></Tab>
        <div className='bg-black border-s-4 border-red-500'>
        <Tab name="Parties" icon={<FiPlus size={20}/>}><BsFillPeopleFill size={20}/></Tab>
        </div>
        <Tab name="Items" icon={<FiPlus size={20}/>}><FaShapes size={20}/></Tab>
        <Tab name="Sale" icon={<BsChevronDown size={15}/>}><TbReportAnalytics size={20}/></Tab>
        <Tab name="Purchase" icon={<BsChevronDown size={15}/>}><BiSolidCartAlt size={20}/></Tab>
        <Tab name="Cash & Bank" icon={<BsChevronDown size={15}/>}><BiSolidBank size={20}/></Tab>
      </div>

      <div className='flex flex-col'>
        <div className='bg-white border-b-2 border-gray-300 w-[80vw] md:w-[90vw] flex md:flex-wrap items-center justify-between p-5'>
          <div className='flex'>
          <AiOutlineSearch size={25} className='text-gray-300'/>
          <span className='ms-3 lg:ms-1 text-gray-300'>Search Transactions</span>
          </div>
          <div className='flex md:flex-wrap items-center'>
          <button className='flex items-center bg-[#FFE5E9] md:mt-3 p-3 lg:p-2 lg:text-[14px] rounded-3xl text-[#ED1A3B]'><FiPlus size={15} className='me-3 lg:me-2'/>Add Sale</button>
          <button className='flex items-center mx-3 md:mt-3 lg:mx-2 bg-[#D2E9FF] p-3 lg:p-2 lg:text-[14px] rounded-3xl text-[#0A76E8]'><FiPlus size={15} className='me-3 lg:me-2'/>Add Purchase</button>
          <button className='flex items-center md:mt-3 me-3 lg:me-2 bg-white p-3 lg:p-2 lg:text-[14px] rounded-3xl text-[#0A76E8] border-2 border-gray-300'><FiPlus size={15} className='me-3 lg:me-2' />Add More</button>
          <BsWhatsapp size={30} className='mx-3 lg:mx-2 md:mt-3'/>
          <AiFillSetting size={30} className='md:mt-3'/>
          </div>
        </div>

        <div className='w-[80vw] md:w-[90vw] flex justify-center text-[#4EAED4] bg-[#F5F5F5] p-3 shadow-lg'>
            NAME
        </div>

        <div className='flex md:flex-col'>
          <div className='bg-white shadow-lg w-[25%] md:w-[95%] h-[70vh] mt-3 ms-3'>
            <div className='p-2'>
              <div className='shadow-md rounded-md p-3'>
                <div className='flex'>
                <div className='p-2 rounded-full bg-[#FFE2E2] w-fit h-fit me-2'>
                <RiContactsBook2Fill color='red' size={25}/>
                </div>
                <div>
                <span>Import Parties</span>
                <p className='text-[12px] text-gray-400'>Use contacts from your Phone or Gmail to create parties.</p>
                </div>
                </div>
              </div>
            </div>
            <div className='flex items-center mt-5 justify-between'>
            <div className='p-2 lg:p-1 bg-gray-300 rounded-full ms-3'><AiOutlineSearch size={25} className='text-black'/></div>
            <button className='flex items-center me-3 lg:me-2 bg-[#F3A33A] p-2 lg:p-1 rounded-lg text-white lg:text-[14px]'><FiPlus size={15} className='me-3 lg:me-1'/>Add Party</button>
            </div>

            <div  className='flex justify-between px-3 mt-3'>
              <span className='text-gray-600'>PARTY</span>
              <span className='text-gray-600'>AMOUNT</span>
            </div>
            <div  className='flex justify-between mt-3 px-3 py-2 bg-[#CEE6F3]'>
              <span className='text-black'>KPS Sanhaula</span>
              <span className='text-green-400 '>2,360.00</span>
            </div>
          </div>

          <div className='w-[72%] md:w-[95%]'>
          <div className='bg-white shadow-lg w-[100%] h-fit ms-3 mt-3'>
            <div className='p-3 flex justify-between items-center'>
            <span className='text-black text-sm font-semibold'>KPS SANHAULA</span>
            <div className='flex'>
            <BiMessageAltDetail size={25} />
            <BsWhatsapp size={25} color='green' className='mx-3'/>
            <MdAddAlarm size={25} />
            </div>
            </div>

            <div className='flex justify-between items-center mt-4 px-3'>
              <span>Phone: 8282828282</span>
              <span>Address: Sanhaula</span>
            </div>
            <div className='flex justify-between items-center mt-4 px-3'>
              <span>Email: <span className='text-blue-400'>Add Email</span></span>
              <span>Gstin: <span className='text-blue-400'>Add GSTIN</span></span>
            </div>
            <div className='flex justify-between items-center mt-4 mb-3 px-3'>
              <span>No Credit Limit Set: <span className='text-blue-400'>Set Credit Limit</span></span>
            </div>
          </div>

          <div className='bg-white shadow-lg w-[100%] h-[50%] ms-3 mt-3'>
            <div className='flex items-center justify-between'>
            <h3 className='pt-5 ps-3'>TRANSACTIONS</h3>
            <div className='border-2 w-[30%] me-3 p-1 mt-3 border-gray-200'>
            <AiOutlineSearch size={25} className='text-gray-300'/>
            </div>
            </div>

            <div className='flex items-center justify-evenly mt-5'>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>Type</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>number</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>date</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>total</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>balance</span>
            </div>
            <div className='flex items-center justify-evenly mt-5 bg-[#CEE6F3] p-2'>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>Sale</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>1</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>30/06/2023</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>2,360.00</span>
              <span className='uppercase border-s-2 ps-2 border-gray-200'>2,360.00</span>
            </div>
          </div>
          </div>
        </div>



      </div>
      
    </main>
  )
}
