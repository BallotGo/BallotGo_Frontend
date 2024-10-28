import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

import LandingPage from './components/LandingPage';
import LoginReg from './components/Login';
import UserRegister from './components/UserRegister';
import UsernamePasswordRegister from './components/UsernamePasswordRegister';
import Dashboard from './components/Dashboard';
import Vote from './components/VotePage';
import VerifyVotePage from './components/verifyVotePage';
import Results from './components/Results';
import UniversalVerifiability from './components/UniversalVerifiability';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginReg />} />
          <Route path='/register' element={<UserRegister />} />
          <Route
            path='/register/username-password'
            element={<UsernamePasswordRegister />}
          />
          <Route path='/results' element={<Results />} />
          <Route path='/universal-verifiability' element={<UniversalVerifiability />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboard/vote'
            element={
              <ProtectedRoute>
                <Vote />
              </ProtectedRoute>
            }
          />
          <Route
            path='/dashboard/verify'
            element={
              <ProtectedRoute>
                <VerifyVotePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
