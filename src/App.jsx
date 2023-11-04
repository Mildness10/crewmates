import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateForm from './CreateForm';
import CrewmateList from './CrewmateList';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/create" element={<CreateForm/>} />
          <Route path="/crewmates" element={<CrewmateList/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
