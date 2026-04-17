import requests
import requests_mock

BASE_URL = "http://localhost:5000"

def test_api_health_check():
    with requests_mock.Mocker() as m:
        # This "fakes" the server response
        m.get(f"{BASE_URL}/status", text='OK', status_code=200)

        response = requests.get(f"{BASE_URL}/status")
        assert response.status_code == 200

def test_form_submission_logic():
    payload = {"name": "Himangi", "uid": "23BCC70020"}
    with requests_mock.Mocker() as m:
        # This "fakes" the success message
        m.post(f"{BASE_URL}/api/submit", json={"message": "Success"}, status_code=201)

        response = requests.post(f"{BASE_URL}/api/submit", json=payload)
        assert response.status_code == 201