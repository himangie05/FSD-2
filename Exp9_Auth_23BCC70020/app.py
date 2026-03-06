from flask import Flask, request, jsonify
import jwt
import datetime
import os
from functools import wraps

app = Flask(__name__)
# Using an environment variable for security, or a default for local testing
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'cu_ait_cse_secret')

USER_DATA = {"admin": "password123"}

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith("Bearer "):
                token = auth_header.split(" ")[1]
        
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(*args, **kwargs)
    return decorated

@app.route('/auth/basic', methods=['POST'])
def auth_basic():
    auth = request.authorization
    if auth and auth.username in USER_DATA and USER_DATA[auth.username] == auth.password:
        return jsonify({"message": "Authenticated via Authorization Header"})
    return jsonify({"message": "Invalid Credentials"}), 401

@app.route('/auth/custom', methods=['POST'])
def auth_custom():
    username = request.headers.get('X-Username')
    password = request.headers.get('X-Password')
    if username in USER_DATA and USER_DATA[username] == password:
        return jsonify({"message": "Authenticated via Custom Headers"})
    return jsonify({"message": "Invalid Credentials"}), 401

@app.route('/login', methods=['POST'])
def login():
    auth = request.json
    if auth and auth.get('username') in USER_DATA and USER_DATA[auth.get('username')] == auth.get('password'):
        token = jwt.encode({
            'user': auth.get('username'),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        }, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'token': token})
    return jsonify({"message": "Invalid Credentials"}), 401

@app.route('/protected', methods=['GET'])
@token_required
def protected():
    return jsonify({"message": "Welcome! You have a valid JWT Bearer Token."})

if __name__ == '__main__':
    app.run(debug=True)