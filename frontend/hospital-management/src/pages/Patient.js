import React from "react";
import JsonDataDisplay from '../components/patient_table'
import { FaUserPlus } from 'react-icons/fa';
import { getPatients } from '../api';

function Patient(props) {
  const [patientList, setPatientList] = React.useState([])
  const [displayData, setdisplayData] = React.useState([]);
  const [count, setCount] = React.useState(-1);

  React.useEffect(() => {
    loadData()

    setdisplayData(patientList)
  }, [count]);

  async function loadData() {
    setPatientList(await getPatients())
    if(count<0)setCount(0)
  }

  function onFilter(filterText) {
    var tempObj = patientList
    tempObj = patientList.filter(function (obj) {
      return obj.full_name.toLowerCase().includes(filterText.toLowerCase())
    }).map(function (obj) {
      return obj;
    });

    setdisplayData(tempObj)
  }

  return (
    // <div className="">
    <div className='justify-center items-center pt-10'>
      <div className="text-center ">
        <h1 className="text-4xl">Patient Dashboard</h1>
      </div>
      <div className="flex border m-5">
        <input
          type="text"
          className="block rounded-full w-full px-4 py-2 text-slate-900 bg-slate-200 border-slate-500 border focus:border-rose-500"
          placeholder="Filter..."
          onChange={(e) => onFilter(e.target.value)}
        />
        <button onClick={() => props.launchModal("pat", true)} className='flex w-1/6 mx-5 py-2 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out '>
          <FaUserPlus className="w-5 h-5 mr-5" />
          <p className='font-semibold'>
            New Patient
          </p>
        </button>

      </div>
      <div className="flex justify-center ">
        <JsonDataDisplay launchModal={(name, value, id) => props.launchModal(name, value, id)} data={displayData} />
      </div>
    </div>
    // </div>
  );
}
export default Patient;
