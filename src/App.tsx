import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OfflineOverlay from './components/OfflineOverlay';
import OfflineContent from './components/OfflineContent';
import { useOnlineStatus } from './hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();

  // State to determine if we show the initial "Overlay" or the "Content" page when offline
  const [showOfflineContent, setShowOfflineContent] = useState(false);

  // Reset the view to overlay if connection comes back and is lost again
  useEffect(() => {
    if (isOnline) {
      setShowOfflineContent(false);
    }
  }, [isOnline]);

  return (
    <>
      {/*
        Global Offline Handling:
        Instead of unmounting the app, we overlay the offline components on top.
        This preserves the PWA cache state if the user was already browsing.
      */}
      {!isOnline && (
        !showOfflineContent ? (
          <OfflineOverlay onEnterOfflineMode={() => setShowOfflineContent(true)} />
        ) : (
          <OfflineContent />
        )
      )}

      {/* Main Application Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
