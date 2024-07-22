import uuid
from flask import jsonify

def fb_create_appointment(fb_ref, address, appointment_name, date, end_time, start_time, status, patient_id, medical_notes):
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    payload = {
        "address" : address,
        "appointment_name": appointment_name,
        "date" : date,
        "end_time" : end_time,
        "start_time" : start_time,
        "status" : status,
        "patient_id": patient_id,
        "medical_notes":medical_notes,
        "appointment_id" : str(uuid.uuid4())
    }
    
    try:
        fb_ref.document(payload['appointment_id']).set(payload)
        return ({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"

def fb_update_appointment(fb_ref, appointment_id, appointment_name, address, date, end_time, start_time, status, patient_id, medical_notes):
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    payload = {
        "address" : address,
        "appointment_name" : appointment_name,
        "date" : date,
        "end_time" : end_time,
        "start_time" : start_time,
        "status" : status,
        "patient_id": patient_id,
        "medical_notes": medical_notes,
        "appointment_id" : appointment_id
    }
    
    try:
        fb_ref.document(appointment_id).set(payload)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"

def fb_read_appointments(fb_ref, appointment_id):
    """
        read() : Fetches documents from Firestore collection as JSON.
        patient : Return document that matches query ID.
        all_patients : Return all documents.
    """
    try:
        # Check if ID was passed to URL query
        if appointment_id:
            appointment = fb_ref.document(appointment_id).get()
            return jsonify(appointment.to_dict())
        else:
            all_appointments = [doc.to_dict() for doc in fb_ref.stream()]
            return jsonify(all_appointments)
    except Exception as e:
        return f"An Error Occurred: {e}"