# Experiment 9: Token-Based Authentication
**Name:** Himangi Bhatt  
**UID:** 23BCC70020  
**Department:** AIT-CSE, Chandigarh University  

## Objective
To implement and test various token-based authentication methods using a Python Flask backend.

## Authentication Methods Implemented
1. **Standard Authorization Header**: Using Basic Auth.
2. **Custom Header**: Using `X-Username` and `X-Password`.
3. **JWT Bearer Token**: Generating a token via `/login` and accessing a `/protected` route.

## Tech Stack
- **Backend:** Python (Flask)
- **Token Management:** PyJWT
- **Deployment:** Render
- **Testing:** Postman

## Local Setup
1. Create a virtual environment: `python -m venv venv`
2. Activate venv: `.\venv\Scripts\activate`
3. Install dependencies: `pip install -r requirements.txt`
4. Run server: `python app.py`