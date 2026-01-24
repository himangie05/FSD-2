Experiment 3: Implement Routing in SPA

1. Objective
To create a Single Page Application (SPA) using React and implement client-side routing to allow navigation between different views without a browser refresh.

2. Requirement Checklist
As per the experiment details, the following components from the react-router-dom package were utilized:

BrowserRouter

Routes

Route

Link

3. Project Structure
The application is organized into a modular component structure:

spa.jsx: The main routing hub containing the navigation bar and route definitions.

home.jsx: View for the root path (/).

about.jsx: View for the about path (/about).

contact.jsx: View for the contact path (/contact).

4. Implementation Details
Navigation: Uses the <Link> component to update the URL without triggering a full page reload.

Routing Logic: The <Routes> container wraps individual <Route> components, mapping specific paths to their respective React components.

State Preservation: By using BrowserRouter, the application maintains its state across different views, providing a seamless user experience.

5. How to Run
Install Dependencies:

Bash

npm install react-router-dom
Execute Project:

Bash

npm run dev

6. Conclusion
The experiment successfully demonstrates the implementation of routing in a React SPA. By using react-router-dom, the application handles multiple views efficiently within a single HTML page, fulfilling the core requirements of modern web development.