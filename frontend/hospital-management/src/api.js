import axios from "axios";

// const baseURL = "http://127.0.0.1:5000"
const baseURL = "https://cps-714-hospital-management.herokuapp.com"


export async function getPatients() {
  let data = {};
  return axios({
    method: "get",
    url: baseURL + "/read_patients",
    headers: {},
    data: data,
  })
    .then(function (response) {
      return(response.data)
    })
    .catch(function (error) {
      return(error);
    });
}

export async function getPatientData(pat_id) {
  let data = {};
  return axios({
    method: "get",
    url: baseURL + "/read_patients?patient_id="+pat_id,
    headers: {},
    data: data,
  })
    .then(function (response) {
      return(response.data)
    })
    .catch(function (error) {
      return(error);
    });
}

export async function getEmployees() {
  let data = {};
  return axios({
    method: "get",
    url: baseURL + "/read_employees",
    headers: {},
    data: data,
  })
    .then(function (response) {
      return(response.data)
    })
    .catch(function (error) {
      return(error);
    });
}
export async function getAppointments() {
  let data = {};
  return axios({
    method: "get",
    url: baseURL + "/read_appointments",
    headers: {},
    data: data,
  })
    .then(function (response) {
      return(response.data);
    })
    .catch(function (error) {
      return(error);
    });
}
export async function createAppointment(request){
  let data = request;
  console.log(data)
  let config = {
    method: 'post',
    url: baseURL + "/create_appointment",
    headers: { 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    return(response.data);
  })
  .catch(function (error) {
    return(error);
  });
}
export async function updateAppointment(request){
  let data = request;
  let config = {
    method: 'post',
    url: baseURL + "/update_appointment",
    headers: { 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    return(response.data);
  })
  .catch(function (error) {
    return(error);
  });
}
export async function updatePatient(request){
  let data = request;
  let config = {
    method: 'post',
    url: baseURL + "/update_patient",
    headers: { 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    return(JSON.stringify(response.data));
  })
  .catch(function (error) {
    return(error);
  });
}

export async function createPatient(request){
  let data = request;
  let config = {
    method: 'post',
    url: baseURL + "/create_patient",
    headers: { 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    return(response.data);
  })
  .catch(function (error) {
    return(error);
  });
}

export async function updateEmployee(request){
  let data = request;
  let config = {
    method: 'post',
    url: baseURL + "/update_employee",
    headers: { 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    return(JSON.stringify(response.data));
  })
  .catch(function (error) {
    return(error);
  });
}

export async function createEmployee(request){
  let data = request;
  let config = {
    method: 'post',
    url: baseURL + "/create_employee",
    headers: { 
      'Content-Type': 'text/plain'
    },
    data : data
  };
  
  return axios(config)
  .then(function (response) {
    return(response.data);
  })
  .catch(function (error) {
    return(error);
  });
}