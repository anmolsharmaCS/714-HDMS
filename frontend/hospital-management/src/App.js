import "./App.css";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import PageManager from "./pages/PageManager";
import { getAppointments, getEmployees, getPatients } from "./api";

function App() {
  const [test, setTest] = useState("");
  useEffect(() => {
    let patientData = getPatients();
    let appointmentData = getAppointments();
    let employeeData = getEmployees();
    console.log(patientData);
    console.log(appointmentData);
    console.log(employeeData);
  }, []);

  return (
    <div style={{ backgroundColor: "#e2e8f0", overflowX:"hidden"}}>
      <PageManager />
    </div>
  );
}


export default App;
