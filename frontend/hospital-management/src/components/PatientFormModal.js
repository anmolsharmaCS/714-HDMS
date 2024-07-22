import React from "react";
import { createPatient } from '../api'
import { FaTimes } from 'react-icons/fa';
function PatientFormModal(props) {

  async function handleSubmit() {
    let patientRequest = {
      // "patient_id": document.getElementById("patient_id").value,
      "dob": document.getElementById("dob").value,
      "address": [document.getElementById("address").value, document.getElementById("city").value, document.getElementById("region").value, document.getElementById("country").value].join(", "),
      "email": document.getElementById("email").value,
      "name": [document.getElementById("first-name").value, document.getElementById("last-name").value].join(" "),
      "phone": document.getElementById("phone").value,
      //"medical_notes": document.getElementById("medical_notes").value.split(","),
      "medical_notes": { Testing: "Testing Note" },
      "health_card": document.getElementById("health_card").value,
      "appointments": "{}"
    }
    await createPatient(patientRequest)
    props.launchModal("pat", false)
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
      <div className="fixed bg-slate-200 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 shadow rounded-xl p-5">

        <form>
          <div className="">
            <div className="flex flex-row justify-between w-full pb-5">
              <div className="w-7 h-7"></div>
              <h1 className="text-center"> New Patient Form</h1>
              <div onClick={() => props.launchModal("pat", false)} role={'button'} className=" bg-rose-500 rounded-full p-1 w-7 h-7">
                <FaTimes className="text-slate-900 w-full h-full" />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 "
                >
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
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
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

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="health_card"
                  className="block text-sm font-medium text-gray-700"
                >
                  Health Card
                </label>
                <input
                  type="text"
                  name="health_card"
                  id="health_card"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  placeholder="MM/DD/YYYY"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="(###)-###-####"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="address"
                  autoComplete="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>

              <div className="col-span-6 sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Notes
                </label>
                <input
                  type="text"
                  name="medical_notes"
                  id="medical_notes"
                  autoComplete="notes"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="pt-5 flex justify-around">
          <button onClick={() => props.launchModal("pat", false)} className="flex w-1/3 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out ">
            Discard
          </button>
          <button onClick={() => handleSubmit()} className="flex w-1/3 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientFormModal;
