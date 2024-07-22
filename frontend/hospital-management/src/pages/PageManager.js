import React, { useState } from 'react'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Employee from './Employee'
import Appointment from './Appointment'
import EmployeeFormModal from '../components/EmployeeFormModal'
import AppointmentFormModal from '../components/AppointmentFormModal'
import PatientRecordFormModal from '../components/PatientRecordFormModal'
import PatientFormModal from '../components/PatientFormModal'
import Patient from './Patient'

export default function Main() {
    const [page, currentPage] = useState(-1)
    const [openEmpModal, setOpenEmpModal] = useState(false)
    const [openPatModal, setOpenPatModal] = useState(false)
    const [openPatRecModal, setOpenPatRecModal] = useState([false, -1])
    const [openAptModal, setOpenAptModal] = useState(false)

    function navigatePage(num) {
        currentPage(num)
    }
    function closeModals() {
        setOpenEmpModal(false)
        setOpenPatModal(false)
        setOpenPatRecModal([false, -1])
        setOpenAptModal(false)
    }

    function launchModal(name, value, id=-1) {
        closeModals();
        if (name === "emp") {
            setOpenEmpModal(value)
        }
        else if (name === "pat") {
            setOpenPatModal(value)
        }
        else if (name === "patrec") {
            setOpenPatRecModal([value, id])
        }
        else if (name === "apt") {
            setOpenAptModal(value)
        }
    }

    if (page === -2) {
        return (
            <Signup navigatePage={(num) => navigatePage(num)} />
        )
    }

    if (page === -1) {
        return (
            <Login navigatePage={(num) => navigatePage(num)} />
        )
    }

    if (page === 0) {
        return (<>
            <Nav navigatePage={(num) => navigatePage(num)} />
            <Home navigatePage={(num) => navigatePage(num)} />
            <Footer navigatePage={(num) => navigatePage(num)} />
        </>
        )
    }
    else if (page === 1) {
        return (<>
            <Nav navigatePage={(num) => navigatePage(num)} />
            <Employee navigatePage={(num) => navigatePage(num)} launchModal={(name, value) => launchModal(name, value)} />
            {openEmpModal && <EmployeeFormModal launchModal={(name, value) => launchModal(name, value)} />}
            <Footer navigatePage={(num) => navigatePage(num)} />
        </>
        )
    }
    else if (page === 2) {
        return (<>
            <Nav navigatePage={(num) => navigatePage(num)} />
            <Patient navigatePage={(num) => navigatePage(num)} launchModal={(name, value, id) => launchModal(name, value, id)}/>
            {openPatModal && <PatientFormModal launchModal={(name, value, id) => launchModal(name, value, id)} />}
            {openPatRecModal[0] && <PatientRecordFormModal patient_id={openPatRecModal[1]} launchModal={(name, value, id) => launchModal(name, value, id)} />}
            <Footer navigatePage={(num) => navigatePage(num)} />
        </>)
    }
    else if (page === 3) {
        return (<>
            <Nav navigatePage={(num) => navigatePage(num)} />
            <Appointment navigatePage={(num) => navigatePage(num)} launchModal={(name, value) => launchModal(name, value)}/>
            {openAptModal && <AppointmentFormModal launchModal={(name, value) => launchModal(name, value)} />}
            <Footer navigatePage={(num) => navigatePage(num)} />
        </>)
    }
}

