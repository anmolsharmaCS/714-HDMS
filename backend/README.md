# Installing and Running Flask Backend

1. Ensure that Python 3 is installed (https://www.python.org/downloads/)
2. Unzip `backend.zip`
3. In a separate terminal:
   1. Navigate to `[path to folder]`
   2. Run `python -m venv env`
   3. Activate `venv`
      * On Unix or MacOS `source env/bin/activate`
      * On Windows `env\Scripts\activate`
   4. Navigate to `./hospital_management`
   5. Run `python -m pip install -r requirements.txt`
   6. Run `python app.py`
4. In a few seconds, your flask app should start, running at http://127.0.0.1:5000
