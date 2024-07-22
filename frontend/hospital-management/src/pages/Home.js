import React from 'react'
import animationData from "../assets/animations/homepage.json"
import { useLottie } from "lottie-react";
import { FaRegCalendarAlt, FaUserAlt, FaUserNurse } from 'react-icons/fa';

function Home(props) {
    const options = {
        loop: true,
        animationData: animationData,
    };
    const { View } = useLottie(options);

    var day = new Date();
    var hr = day.getHours();
    var greeting;
    if (hr >= 0 && hr < 12) {
        greeting = "Morning";
    } else if (hr === 12) {
        greeting = "Noon";
    } else if (hr >= 12 && hr <= 18) {
        greeting = "Afternoon";
    } else {
        greeting = "Evening";
    }

    return (
        <div className=''>
            <div className='bg-slate-200 flex flex-row justify-center my-24 pt-10 px-10'>
                <div className='flex flex-col justify-center items-center w-1/3'>
                    <div className="flex ml-48 w-2/3">
                        {View}
                    </div>
                </div>
                <div className='flex flex-col justify-center align-center w-2/3'>
                    <div className="flex p-2 m-2 justify-center">
                        <button onClick={() => props.navigatePage(3)} className='flex w-2/3 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out '>
                            <FaRegCalendarAlt className="w-7 h-7 mr-5" />
                            <p className='text-2xl py-10 font-semibold'>
                                View Appointments
                            </p>
                        </button>
                    </div>
                    <div className="flex p-2 m-2 justify-center">
                        <button onClick={() => props.navigatePage(2)} className='flex w-2/3 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out '>
                            <FaUserAlt className="w-7 h-7 mr-5" />
                            <p className='text-2xl py-10 font-semibold'>
                                View Patient Database
                            </p>
                        </button>
                    </div>
                    <div className="flex p-2 m-2 justify-center">
                        <button onClick={() => props.navigatePage(1)} className='flex w-2/3 justify-center items-center rounded-full text-slate-900 bg-rose-500 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out '>
                            <FaUserNurse className="w-7 h-7 mr-5" />
                            <p className='text-2xl py-10 font-semibold'>
                                View Employee Database
                            </p>
                        </button>
                    </div>
                    {/* <button onClick={() => props.navigatePage(2)} className='font-bold py-2 px-4 bg-blue-300 opacity-75 border-gray-500 hover:bg-blue-200'>Patient</button> */}
                    {/* <button onClick={() => props.navigatePage(1)} className='font-bold py-2 px-4 bg-purple-300 opacity-75 border-gray-500 hover:bg-purple-200'>Employee</button> */}
                </div>
            </div>

            {/* <div className='h-full bg-gray-800 text-gray-500'>
            <h1 className='text-center pt-20 text-5xl'>An organized platform for all your hospital needs</h1>
            <div className='flex justify-around pt-20 '>
                <div className='w-1/3 grid justify-items-center'>
                    <img onClick={() => props.navigatePage(2)} className='h-48 w-96' src='https://img.freepik.com/premium-vector/cartoon-illustration-lying-patient-with-drip-blood-hospital-isolated-white-health-care-concept-with-patient-during-blood-transfusion_126520-510.jpg' alt='patient-img'></img>
                    <p>Patients. <br></br> Patients can use this to view all of their patient info or their appointments</p>
                </div>
                <div className='w-1/3 grid justify-items-center'>
                    <img onClick={() => props.navigatePage(1)} className='h-48 w-96' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROEwtqmEJWSiaZYbAYh-6I9hoi3708SyrFUw&usqp=CAU' alt='HealthCareWorker-img'></img>
                    <p>Healthcare Workers. <br></br> Doctors/Admins/Receptionists can manage all of the patients' and the hospital's needs</p>
                </div>
                <div className='w-1/3 grid justify-items-center'>
                    <img className='h-48 w-96' src='https://as1.ftcdn.net/v2/jpg/03/26/34/52/1000_F_326345297_ll1tPChCh9aWG6Ug5I1GoYU3aB5prLRT.jpg' alt='Appointment-img'></img>
                    <p>Appointments. <br></br>Hospitals have many appointments and this application is designed to keep it all organized efficiently</p>
                </div>
            </div>
        </div>
        <div className='h-80 bg-gray-900 text-gray-500 text-5xl'>
            <h1 className='text-center pt-16'> To get started please select</h1>
            
            <div className='flex justify-around pt-20 text-3xl' >
                <button onClick={() => props.navigatePage(2)} className='border-2 border-gray-500 hover:bg-blue-500 py-4 px-8'>Patient</button>
                <button onClick={() => props.navigatePage(1)} className='border-2 border-gray-500 hover:bg-purple-300 py-4 px-8'>Employee</button>
            </div>
        </div> */}
        </div>
    )
}

export default Home
