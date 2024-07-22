import uuid
from flask import jsonify

def fb_create_employee(fb_ref, address, email, name, phone, notes, position, active):
    """
        create() : Add document to Firestore collection with request body.
        Ensure you pass a cust 'title': 'Write a blog post'}
    """
    payload = {
        "address" : address,
        "email" : email,
        "full_name" : name,
        "phone" : phone,
        "notes":notes,
        "position" : position,
        "active": active,
        "employee_id" : str(uuid.uuid4())
    }
    try:
        fb_ref.document(payload['employee_id']).set(payload)
        return json.loads({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"

def fb_update_employee(fb_ref, employee_id, address, email, name, phone,  notes, position, active):
    """
        update() : Update document in Firestore collection with request body.
        Ensure you pass a custom ID as part of json body in post request,
        e.g. json={'id': '1', 'title': 'Write a blog post today'}
    """
    payload = {
        "address" : address,
        "email" : email,
        "full_name" : name,
        "phone" : phone,
        "notes":notes,
        "position" : position,
        "active": active,
        "employee_id" : employee_id
    }
    try:
        fb_ref.document(employee_id).set(payload)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred: {e}"

def fb_read_employee(fb_ref, employee_id):
    """
        read() : Fetches documents from Firestore collection as JSON.
        employee : Return document that matches query ID.
        all_employees : Return all documents.
    """
    try:
        # Check if ID was passed to URL query
        if employee_id:
            employee = fb_ref.document(employee_id).get()
            return jsonify(employee.to_dict())
        else:
            all_employees = [doc.to_dict() for doc in fb_ref.stream()]
            return jsonify(all_employees)
    except Exception as e:
        return f"An Error Occurred: {e}"
