import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContexProvider } from './workoutContext/Workoutcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutContexProvider>
      <App />
    </WorkoutContexProvider>
  </React.StrictMode>
);
