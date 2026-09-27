import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Onboarding from './components/Onboarding/Onboarding';
import ProfileOverview from './components/ProfileOverview/ProfileOverview';

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://health-fitness-tracker-backend-qcu8.onrender.com');

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem('fitness-profile');
    return savedProfile ? JSON.parse(savedProfile) : null;
  });

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('fitness-profile', JSON.stringify(userProfile));
    }
  }, [userProfile]);

  const saveProfile = async (profile) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Profile could not be saved.');
      }

      const savedProfile = data.profile || profile;
      setUserProfile(savedProfile);
      setCurrentView('profile');
      return savedProfile;
    } catch (error) {
      console.error('Could not save profile:', error);
      setUserProfile(profile);
      setCurrentView('profile');
      return profile;
    }
  };

  if (currentView === 'onboarding') {
    return (
      <Onboarding
        profile={userProfile}
        onBack={() => setCurrentView('landing')}
        onSave={saveProfile}
      />
    );
  }

  if (currentView === 'profile') {
    return (
      <ProfileOverview
        profile={userProfile}
        onBackHome={() => setCurrentView('landing')}
        onEdit={() => setCurrentView('onboarding')}
      />
    );
  }

  return <LandingPage onGetStarted={() => setCurrentView('onboarding')} />;
}

export default App;
