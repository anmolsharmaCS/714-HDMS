import React from 'react'
import { createEmployee } from '../api'
import { FaTimes } from 'react-icons/fa';

function EmployeeFormModal(props) {

  async function handleSubmit() {
    let employeeRequest = {

      "address": [document.getElementById("address").value, document.getElementById("city").value, document.getElementById("region").value, document.getElementById("country").value].join(", "),
      "email": document.getElementById("email").value,
      "name": [document.getElementById("first-name").value, document.getElementById("first-name").value].join(" "),
      "phone": document.getElementById("phone").value,
      //"medical_notes": document.getElementById("medical_notes").value.split(","),
      "notes": { Testing: "Testing Note" },
      "position": { title: document.getElementById("title").value, type: document.getElementById("type").value, start_date: (new Date(document.getElementById("start_date").value)).toUTCString() },
      "active": document.getElementById("active").value,
    }
    await createEmployee(employeeRequest);
    props.launchModal("pat", false)


  }

  return (
    <div className='fixed top-0 left-0 w-full h-full' style={{ background: "rgba(0, 0, 0, 0.4)" }}>
      <div className="fixed bg-slate-200 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 shadow rounded-xl p-5" >

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
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 ">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder='(###)-###-####'
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                  Street address
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
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  autoComplete="notes"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <h1> Employee Postion Info</h1>
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Position Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Position Type
                </label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  placeholder=''
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="active" className="block text-sm font-medium text-gray-700">
                  Postion Active
                </label>
                <input
                  type="text"
                  name="active"
                  id="active"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
              <div className="col-span-6 sm:col-span-6">
                <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                  Postion Start Date
                </label>
                <input
                  type="datetime-local"
                  name="start_date"
                  id="start_date"
                  placeholder='Sat, 27 Apr 2019 00:00:00 GMT'
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

export default EmployeeFormModal
