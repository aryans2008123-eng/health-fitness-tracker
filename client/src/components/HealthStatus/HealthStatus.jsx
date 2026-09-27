import { useEffect, useState } from 'react';
import './HealthStatus.css';

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://health-fitness-tracker-backend-qcu8.onrender.com');

function HealthStatus() {
  const [backendStatus, setBackendStatus] = useState('Checking...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/health`);
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
          <p className="status-text">{backendStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default HealthStatus;
