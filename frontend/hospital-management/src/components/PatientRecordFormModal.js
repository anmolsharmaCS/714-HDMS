import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { getPatientData, updatePatient } from '../api';

function PatientRecordFormModal(props) {
  const [patData, setpatData] = React.useState([])
  const [count, setCount] = React.useState(-1);
  React.useEffect(() => {
    loadData()

  }, [count]);

  async function loadData() {
    setpatData(await getPatientData(props.patient_id))
    if (count < 0) setCount(0)
  }
  async function handleSubmit(){
    let patientRecordRequest = {
      "patient_id" : props.patient_id,
      "dob": document.getElementById("DOB").value,
      "address": [document.getElementById("address").value, document.getElementById("city").value, document.getElementById("region").value, document.getElementById("country").value].join(", "),
      "email": document.getElementById("email").value,
      "name": [document.getElementById("first-name").value, document.getElementById("last-name").value].join(" "),
      "phone": document.getElementById("phone").value,
      // "medical_notes": document.getElementById("medical_notes").value.split(","),
      "medical_notes": { Testing: "Testing Note" },
      "health_card": document.getElementById("health_card").value,
      "medical_history": document.getElementById("medical-history").value,
      "family_history": document.getElementById("family-history").value,
      "treatment_history": document.getElementById("treatment-history").value,
      "lab_results": document.getElementById("lab-results").value,
      "prgress_notes": document.getElementById("progress-notes").value,
    }
    await updatePatient(patientRecordRequest);
    props.launchModal("patrec", false)
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full' style={{ background: "rgba(0, 0, 0, 0.4)" }}>
      <div className="fixed bg-slate-200 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 shadow rounded-xl p-5" >
        {count === 0 ?
          <form>
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
                    defaultValue={patData.full_name.split(' ')[0]}
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
                    defaultValue={patData.full_name.split(' ')[1]}
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="DOB" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="DOB"
                    id="DOB"
                    defaultValue={new Date(patData.dob).toISOString().split('T')[0]}
                    placeholder='MM/DD/YYYY'
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
                    defaultValue={patData.email}
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
                    defaultValue={patData.phone}
                    placeholder='(###)-###-####'
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                  />
                </div>
                <div className="col-span-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street address
                  </label>
                  <input
                    type="text"
                    name="address"
                    defaultValue={patData.address.split(',')[0]}
                    id="address"
                    autoComplete="address"
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
                    defaultValue={patData.address.split(',')[1]}
                    id="city"
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
                    defaultValue={patData.address.split(',')[2]}
                    id="region"
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
                    defaultValue={patData.address.split(',')[3]}
                    autoComplete="country"
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
                    defaultValue={patData.health_card}
                    id="health_card"
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
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="medical-history" className="block text-sm font-medium text-gray-700">
                      Medical History
                    </label>
                    <input
                      type="text"
                      name="medical-history"
                      id="medical-history"
                      autoComplete="medical-history"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100" />
                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="family-history" className="block text-sm font-medium text-gray-700">
                        Family History
                      </label>
                      <input
                        type="text"
                        name="family-history"
                        id="family-history"
                        autoComplete="family-history"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                      />
                      <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="treatment-history" className="block text-sm font-medium text-gray-700">
                          Treatment History
                        </label>
                        <input
                          type="text"
                          name="treatment-history"
                          id="treatment-history"
                          autoComplete="treatment-history"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                        />
                        <div className="col-span-6 sm:col-span-2">
                          <label htmlFor="lab-results" className="block text-sm font-medium text-gray-700">
                            Lab Results
                          </label>
                          <input
                            type="text"
                            name="lab-results"
                            id="lab-results"
                            autoComplete="lab-results"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                          />
                          <div className="col-span-6 sm:col-span-2">
                            <label htmlFor="progress-notes" className="block text-sm font-medium text-gray-700">
                              Progress Notes
                            </label>
                            <input
                              type="text"
                              name="progress-notes"
                              id="progress-notes"
                              autoComplete="progress-notes"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm hover:bg-gray-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          :

          <></>
        }
        <div className="pt-5 flex justify-around">
          <button onClick={() => props.launchModal("patrec", false)} className="flex w-1/3 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out ">
            Discard
          </button>
          <button onClick={() => handleSubmit()} className="flex w-1/3 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out ">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default PatientRecordFormModal