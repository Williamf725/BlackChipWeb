import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Offline from './pages/Offline';
import { useOnlineStatus } from './hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <Offline />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
