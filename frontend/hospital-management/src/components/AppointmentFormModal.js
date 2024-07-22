import React from 'react'
import { FaTimes } from 'react-icons/fa';

import { getPatients, createAppointment } from '../api';

function AppointmentFormModal(props) {
  const [patientsList, setpatientsList] = React.useState([]);

  React.useEffect(() => {
    loadPatients()

    console.log(patientsList)
  }, []);

  async function loadPatients() {
    setpatientsList(await getPatients())
  }

  async function handleSubmit() {
    console.log("test")
    let appointmentRequest = {
      "address": [document.getElementById("address").value, document.getElementById("city").value, document.getElementById("region").value, document.getElementById("country").value].join(", "),
      "patient_id": document.getElementById("patient_id").value,
      "date": document.getElementById("date").value,
      // "appointment_id": document.getElementById("appointment_id").value,
      "appointment_name": document.getElementById("appointment_name").value,
      // "medical_notes": document.getElementById("medical_notes").value.split(","),
      "medical_notes": { Testing: "Testing Note" },
      "status": document.getElementById("status").value,
      "start_time": document.getElementById("start_time").value,
      "end_time": document.getElementById("end_time").value
    }

    await createAppointment(appointmentRequest);
    props.launchModal("pat", false)
  }

  return (
    <div className='fixed z-10 top-0 left-0 w-full h-full' style={{ background: "rgba(0, 0, 0, 0.4)" }}>
      <div className="fixed bg-slate-200 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 shadow rounded-xl p-5">
        <form id="patientRecordsForm">
          <div className="">
            <div className='flex flex-row justify-between w-full pb-5'>
              <div className="w-7 h-7"></div>
              <h1 className="text-center"> Edit Patient Record</h1>
              <div onClick={() => props.launchModal("patrec", false)} role={'button'} className=" bg-rose-500 rounded-full p-1 w-7 h-7">
                <FaTimes className="text-slate-900 w-full h-full" />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="appointment_name" className="block text-sm font-medium text-gray-700 ">
                  Appointment Name
                </label>
                <input
                  type="text"
                  name="appointment_name"
                  id="appointment_name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="patient_id" className="block text-sm font-medium text-gray-700">
                  Patient
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                  id="patient_id" name="patient_id">
                  {patientsList.map(pat => {
                    return (
                      <option value={pat.patient_id}>{pat.full_name}</option>
                    )
                  })}
                </select>
              </div>



              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <input
                  type="text"
                  name="status"
                  id="status"
                  placeholder=''
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Appointment Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="street-address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  autoComplete="country"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Appointment Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="start_time" className="block text-sm font-medium text-gray-700">
                  Appointment Start Time
                </label>
                <input
                  type="time"
                  name="start_time"
                  id="start_time"
                  placeholder='Sat, 27 Apr 2019 00:00:00 GMT'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="end_time" className="block text-sm font-medium text-gray-700">
                  Appointment End Time
                </label>
                <input
                  type="time"
                  name="end_time"
                  id="end_time"
                  placeholder='Sat, 27 Apr 2019 00:00:00 GMT'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <input
                  type="text"
                  name="medical_notes"
                  id="medical_notes"
                  autoComplete="medical_notes"
                  placeholder='Seperate notes with a comma for now'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>


            </div>
          </div>
        </form >
        <div className="pt-5 flex justify-around">
          <button onClick={() => props.launchModal("pat", false)} className="flex w-1/3 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out ">
            Discard
          </button>
          <button onClick={() => handleSubmit()} className="flex w-1/3 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out ">
            Save
          </button>
        </div>
      </div>

    </div >
  )
}

export default AppointmentFormModal
