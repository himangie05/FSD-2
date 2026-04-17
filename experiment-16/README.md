# Experiment 16: Perform Unit Testing for Frontend/Backend Modules

## 👤 Student Information
* **Name:** Himangi Bhatt
* **UID:** 23BCC70020
* **Section/Group:** AIT-CSE (Cloud Computing)
* **Submission Date:** 17th April, 2026

---

## 📌 Experiment Objective
The objective of this experiment is to implement automated unit testing for both backend API modules and frontend form components, and to integrate these tests into a continuous integration (CI) pipeline using GitHub Actions.

## 🛠️ Technology Stack
* **Backend Testing:** `pytest` with `requests-mock` for API simulation.
* **Frontend Testing:** `Vitest` for component logic validation.
* **CI/CD Tool:** GitHub Actions.
* **Version Control:** Git/GitHub.
* **Terminal:** Windows PowerShell.

---

## 🚀 Implementation Details

### 1. Backend Module (API Testing)
The backend tests are written in Python using the `pytest` framework. To ensure the tests are "unit" tests and do not depend on a live server, `requests-mock` was used to simulate API responses.
* **Test File:** `backend/test_api.py`
* **Execution Command:** ```powershell
    python -m pytest backend/test_api.py
    ```

### 2. Frontend Module (Form Testing)
The frontend tests utilize `Vitest`, a modern blazing-fast unit test framework. It validates the form logic and ensures student data (like UID) is handled correctly.
* **Test File:** `frontend/Form.test.jsx`
* **Execution Command:**
    ```powershell
    cd frontend
    npx vitest run
    ```

### 3. GitHub Actions Integration (CI)
A automated workflow is configured in `.github/workflows/tests.yml`. 
* **Trigger:** The workflow triggers automatically on every `git push`.
* **Workflow Steps:**
    1.  Check out the repository code.
    2.  Set up Node.js environment and run Vitest.
    3.  Set up Python environment, install dependencies, and run Pytest.
    4.  Verify successful completion with green status indicators.

---

## 📂 Folder Structure
```text
experiment-16/
├── .github/workflows/
│   └── tests.yml         # GitHub Actions Workflow
├── backend/
│   └── test_api.py       # API Unit Tests (Pytest)
├── frontend/
│   └── Form.test.jsx     # Component Unit Tests (Vitest)
└── README.md             # Experiment Documentation