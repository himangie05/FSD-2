Objective:
The goal of this experiment is to implement and compare the three primary levels of state management in a React application:

Local State: Managing data within a single component using the useState hook.

Context API: Managing shared state across multiple components without prop-drilling.

Redux: Implementing a centralized global store for complex state transitions using actions and reducers.

Folder Structure:
 

src/
├── components/
│   ├── context/
│   │   ├── CounterGlobalContextAPI.jsx      # Context Provider
│   │   └── CounterGlobalContextParent.jsx   # Context Consumer
│   ├── CounterLocalState.jsx                # useState Implementation
│   └── CounterGlobalReduxParent.jsx         # Redux Consumer
├── store/
│   ├── Store.jsx                            # Redux Store Configuration
│   └── CounterReducer.jsx                   # Redux Logic (Reducer)
├── App.jsx                                  # Main Container
└── main.jsx                                 # App Entry & Redux Provider

Technologies Used:
React: UI Library

MUI (Material UI): For styled buttons and layout components

Redux & React-Redux: For global state management

Vite: Frontend build tool

How to Run the Project:
Navigate to the folder:

cd experiment-4
Install Dependencies:

npm install
Start the Development Server:

npm run dev


Key Concepts Learned
1. Local State
Used for data that only matters to one component. In this experiment, the Local State Counter maintains its own count independently; incrementing it does not affect the other counters.

2. Context API
Provides a way to pass data through the component tree without having to pass props down manually at every level. We used createContext, useContext, and a Provider.

3. Redux
A predictable state container. We implemented the "Flux" pattern by creating:

Store: The single source of truth.

Reducer: A pure function that determines how the state changes based on an action.

Dispatch: The method used to send actions (e.g., INCREMENT) to the store.