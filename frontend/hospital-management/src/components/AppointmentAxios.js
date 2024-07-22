const axios = require('axios');

async function readAppointment (request){
    let config = {
        method: 'get',
        url: 'http://.localhost:3000/read_appointment',
        headers: { 
          'Content-Type': 'text/plain'
        },
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    }
async function createAppointment(request){
    let data = 
    {      
        "address" : "address",
        "email" : "email",
        "full_name" : "name",
        "phone" : "phone",
        "notes": "notes",
        "position" : "position",
        "active": "active",
        "employee_id" : "employee_id" 
    };
    data = request.data;
    let config = {
      method: 'post',
      url: 'http://.localhost:3000/create_appointment',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function updateAppointment(request){
    let data = 
    {      
        "address" : "address",
        "email" : "email",
        "full_name" : "name",
        "phone" : "phone",
        "notes": "notes",
        "position" : "position",
        "active": "active",
        "employee_id" : "employee_id" 
    };
    data = request.data;
    let config = {
      method: 'post',
      url: 'http://.localhost:3000/update_appointment',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

async function deleteAppointment(request){
    let data = 
    {      
        "address" : "address",
        "appointment_name": "appointment_name",
        "date" : "date",
        "end_time" : "end_time",
        "start_time" : "start_time",
        "status" : "status",
        "patient_id": "patient_id",
        "medical_notes":"medical_notes",
        "appointment_id" : "str(uuid.uuid4())"
    };
    data = request.data;
    let config = {
      method: 'delete',
      url: 'http://.localhost:3000/delete_appointment',
      headers: { 
        'Content-Type': 'text/plain'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}