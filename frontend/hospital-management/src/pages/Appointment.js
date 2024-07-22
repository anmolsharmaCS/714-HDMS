import React from 'react'
import Schedule from '../components/Schedule'
import { FaUserPlus } from 'react-icons/fa';

function Appointment(props) {
  return (
    <div className='justify-center items-center pt-10'>
      <div className="text-center ">
        <h1 className="text-4xl">Appointments Dashboard</h1>
      </div>
      <div className="flex border m-5">
        <button onClick={() => props.launchModal("apt", true)} className='flex w-1/6 mx-5 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out '>
          <FaUserPlus className="w-5 h-5 mr-5" />
          <p className='font-semibold'>
            New Appointment
          </p>
        </button>

      </div>
      <div className="flex justify-center ">
        <Schedule></Schedule>
      </div>
    </div>

  )
}

export default Appointment