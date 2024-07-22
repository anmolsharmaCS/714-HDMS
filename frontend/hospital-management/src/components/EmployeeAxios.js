const axios = require('axios');

//ion even kno if I did this right
async function readEmployee (request){
    let config = {
        method: 'get',
        url: 'http://.localhost:3000/read_employee',
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
async function createEmployee(request){
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
      url: 'http://.localhost:3000/create_employee',
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
async function updateEmployee(request){
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
      url: 'http://.localhost:3000/update_employee',
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

async function deleteEmployee(request){
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
      method: 'delete',
      url: 'http://.localhost:3000/delete_employee',
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