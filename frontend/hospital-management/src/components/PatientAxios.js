const axios = require('axios');

async function readPatient (request){
    let config = {
        method: 'get',
        url: 'http://.localhost:3000/read_patient',
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
async function createPatient(request){
    let data = 
    {      
        "address" : "address",
        "dob" : "dob",
        "email" : "email",
        "full_name" : "name",
        "phone" : "phone",
        "health_card": "health_card",
        "medical_notes":"medical_notes",
        "appointments" : "{}",
        "patient_id" : "str(uuid.uuid4())"
    };
    data = request.data;
    let config = {
      method: 'post',
      url: 'http://.localhost:3000/create_patient',
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
async function updatePatient(request){
    let data = 
    {      
        "address" : "address",
        "dob" : "dob",
        "email" : "email",
        "full_name" : "name",
        "phone" : "phone",
        "health_card": "health_card",
        "medical_notes":"medical_notes",
        "appointments" : "{}",
        "patient_id" : "str(uuid.uuid4())"
    };
    data = request.data;
    let config = {
      method: 'post',
      url: 'http://.localhost:3000/update_patient',
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

async function deletePatient(request){
    let data = 
    {      
        "address" : "address",
        "dob" : "dob",
        "email" : "email",
        "full_name" : "name",
        "phone" : "phone",
        "health_card": "health_card",
        "medical_notes":"medical_notes",
        "appointments" : "{}",
        "patient_id" : "str(uuid.uuid4())"
    };
    data = request.data;
    let config = {
      method: 'delete',
      url: 'http://.localhost:3000/delete_patient',
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