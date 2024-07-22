import datetime, json, os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from firebase_admin import credentials, firestore, initialize_app

from CRUD.employee import fb_create_employee, fb_update_employee, fb_read_employee
from CRUD.patient import fb_create_patient, fb_update_patient, fb_read_patients
from CRUD.appointment import fb_create_appointment, fb_update_appointment, fb_read_appointments

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content_Type'
print(datetime.datetime.now())

# Initialize Firestore DB
cred = credentials.Certificate(os.path.dirname(__file__) + '/key.json')
default_app = initialize_app(cred)
db = firestore.client()
employee_ref = db.collection('employee')
patient_ref = db.collection('patient')
appointment_ref = db.collection('appointment')

# PATIENT APIS
@app.route('/create_patient', methods=['POST'])
def new_patient():
    vals = json.loads(request.data)
    address = vals['address']
    # dob = datetime.datetime(vals['dob'])
    dob = datetime.datetime.now()
    email = vals['email']
    name = vals['name']
    phone = vals['phone']
    health_card = vals['health_card']
    raw_notes = vals['medical_notes']

    medical_notes = {}
    for i in raw_notes.keys():
        medical_notes[i] = {
            "note": raw_notes[i],
            "date" : datetime.datetime.now()
        }
    try:
        fb_create_patient(
            fb_ref=patient_ref,
            address=address,
            dob=dob,
            email=email,
            name=name,
            phone=phone,
            health_card=health_card,
            medical_notes=medical_notes
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route('/update_patient', methods=['POST'])
def update_patient():
    vals = json.loads(request.data)
    patient_id = vals['patient_id']
    address = vals['address']
    # dob = datetime.datetime(vals['dob'])
    dob = datetime.datetime.now()
    email = vals['email']
    name = vals['name']
    phone = vals['phone']
    health_card = vals['health_card']
    raw_notes = vals['medical_notes']

    medical_notes = {}
    for i in raw_notes.keys():
        medical_notes[i] = {
            "note": raw_notes[i],
            "date" : datetime.datetime.now()
        }
    
    try:
        fb_update_patient(
            patient_id=patient_id,
            fb_ref=patient_ref,
            address=address,
            dob=dob,
            email=email,
            name=name,
            phone=phone,
            health_card=health_card,
            medical_notes=medical_notes
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route('/read_patients', methods=['GET'])
@cross_origin()
def read_patients():
    patient_id = None
    try:
        patient_id = request.args['patient_id']
    except KeyError as ke:
        pass

    try:
        patients = fb_read_patients(patient_ref, patient_id)
        return (patients, 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

# APPOINTMENT APIS
@app.route('/create_appointment', methods=['POST'])
def new_appointment():
    vals = json.loads(request.data)
    appointment_name = vals['appointment_name']
    address = vals['address']
    date = vals['date']
    end_time = vals['end_time']
    start_time = vals['start_time']
    status = vals['status']
    patient_id = vals['patient_id']
    raw_notes = vals['medical_notes']

    medical_notes = {}
    for i in raw_notes.keys():
        medical_notes[i] = {
            "note": raw_notes[i],
            "date" : datetime.datetime.now()
        }
        
    try:
        fb_create_appointment(
            fb_ref=appointment_ref,
            appointment_name=appointment_name,
            address=address,
            date=date,
            end_time=end_time,
            start_time=start_time,
            status=status,
            patient_id=patient_id,
            medical_notes=medical_notes
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route('/update_appointment', methods=['POST'])
def update_appointment():
    vals = json.loads(request.data)
    appointment_name = vals['appointment_name']
    appointment_id = vals['appointment_id']
    address = vals['address']
    date = vals['date']
    end_time = vals['end_time']
    start_time = vals['start_time']
    status = vals['status']
    patient_id = vals['patient_id']
    raw_notes = vals['medical_notes']

    medical_notes = {}
    for i in raw_notes.keys():
        medical_notes[i] = {
            "note": raw_notes[i],
            "date" : datetime.datetime.now()
        }
        
    try:
        fb_update_appointment(
            patient_id=patient_id,
            appointment_name=appointment_name,
            fb_ref=appointment_ref,
            address=address,
            date=date,
            end_time=end_time,
            start_time=start_time,
            status=status,
            appointment_id=appointment_id,
            medical_notes=medical_notes
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route('/read_appointments', methods=['GET'])
@cross_origin()
def read_appointments():
    appointment_id = None
    try:
        appointment_id = request.args['appointment_id']
    except KeyError as ke:
        pass

    try:
        appointments = fb_read_appointments(appointment_ref, appointment_id)
        return (appointments, 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

# EMPLOYEE APIS
@app.route("/create_employee", methods=['POST'])
def new_employee():
    vals = json.loads(request.data)

    address = vals['address']
    email = vals['email']
    name = vals['name']
    phone = vals['phone']
    notes = vals['notes'] # prob won't be much employee notes
    raw_position = vals['position']
    active = vals['active']

    position = {}
    position['title'] = raw_position['title']
    position['type'] = raw_position['type']
    position['start_date'] = datetime.datetime.now()

    try:
        fb_create_employee(
            fb_ref=employee_ref,
            address=address,
            email=email,
            name=name,
            phone=phone,
            notes=notes,
            position=position,
            active=active
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route("/update_employee", methods=['POST'])
def update_employee():
    vals = json.loads(request.data)

    employee_id = vals['employee_id']
    address = vals['address']
    email = vals['email']
    name = vals['name']
    phone = vals['phone']
    notes = vals['notes']
    raw_position = vals['position']
    active = vals['active']

    position = {}
    position['title'] = raw_position['title']
    position['type'] = raw_position['type']
    # ex. "Sat, 27 Apr 2019 00:00:00 GMT"
    position['start_date'] = datetime.datetime.strptime(raw_position['start_date'], '%a, %d %b %Y %H:%M:%S %Z')

    try:
        fb_update_employee(
            fb_ref=employee_ref,
            employee_id=employee_id,
            address=address,
            email=email,
            name=name,
            phone=phone,
            notes=notes,
            position=position,
            active=active
        )
        return ("Success", 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route("/read_employees", methods=['GET'])
def read_employees():
    employee_id = None
    try:
        employee_id = request.args['employee_id']
    except KeyError as ke:
        pass
    
    try:
        employees = fb_read_employee(employee_ref, employee_id)
        return (employees, 200)
    except Exception as e:
        return (f"An Error Occurred: {e}", 500)

@app.route("/")
def index():
    return "Brother PLZ!"

# Start server by running like a normal python file
if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, port=5000)