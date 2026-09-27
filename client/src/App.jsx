import { useEffect, useState } from 'react';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch('/api/health');
        const data = await response.json();

        if (response.ok && data.success) {
          setBackendStatus('Connected');
          setIsConnected(true);
        } else {
          setBackendStatus('Unable to connect');
          setIsConnected(false);
        }
      } catch (error) {
        setBackendStatus('Unable to connect');
        setIsConnected(false);
      }
    }

    checkBackend();
  }, []);

  return (
    <div className="page-container">
      <div className="card">
        <h1>Health & Fitness Tracker</h1>

        <div className="status-row">
          <p className="status-label">Backend Status</p>
          <p className={`status-value ${isConnected ? 'connected' : 'error'}`}>
            {isConnected ? '✓ Connected' : '✗ Unable to connect'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
