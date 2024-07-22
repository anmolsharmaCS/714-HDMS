import uuid
from flask import jsonify

def fb_create_patient(fb_ref, address, dob, email, name, phone, health_card, medical_notes):
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    payload = {
        "address" : address,
        "dob" : dob,
        "email" : email,
        "full_name" : name,
        "phone" : phone,
        "health_card": health_card,
        "medical_notes":medical_notes,
        "appointments" : {},
        "patient_id" : str(uuid.uuid4())
    }
    try:
        fb_ref.document(payload['patient_id']).set(payload)
        return json.loads({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"

def fb_update_patient(fb_ref, patient_id, address, dob, email, name, phone, health_card, medical_notes):
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    payload = {
        "address" : address,
        "dob" : dob,
        "email" : email,
        "full_name" : name,
        "phone" : phone,
        "health_card": health_card,
        "medical_notes":medical_notes,
        "appointments" : {},
        "patient_id" : patient_id
    }
    try:
        fb_ref.document(patient_id).set(payload)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"

def fb_read_patients(fb_ref, patient_id):
    """
        read() : Fetches documents from Firestore collection as JSON.
        patient : Return document that matches query ID.
        all_patients : Return all documents.
    """
    try:
        # Check if ID was passed to URL query
        if patient_id:
            patient = fb_ref.document(patient_id).get()
            return jsonify(patient.to_dict())
        else:
            all_patients = [doc.to_dict() for doc in fb_ref.stream()]
            return jsonify(all_patients)
    except Exception as e:
        return f"An Error Occurred: {e}"