import os
import json
import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Directory to store form data as JSON files
mails_directory = 'mails'

# Ensure the directory exists
os.makedirs(mails_directory, exist_ok=True)

@app.route('/api/contact', methods=['POST'])
def contact_form():
    try:
        print(request.get_json())
        # Get form data from the request
        data = request.get_json()

        # Process the form data (you can customize this part)
        firstname = data.get('firstname')
        lastname = data.get('lastname')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        # Perform any additional processing or validation here

        # Save the mail as a JSON file
        save_mail(firstname, lastname, email, subject, message)

        return jsonify({'success': True, 'message': 'Form submitted successfully'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

def save_mail(firstname, lastname, email, subject, message):
    # Define the filename based on a combination of name and timestamp
    filename = f"{firstname}_{lastname}_{int(time.time())}.json"

    # Construct the full path to save the file
    filepath = os.path.join(mails_directory, filename)

    # Save the mail data as a JSON file
    with open(filepath, 'w') as file:
        json.dump({
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'subject': subject,
            'message': message
        }, file)

if __name__ == '__main__':
    app.run(debug=True)
