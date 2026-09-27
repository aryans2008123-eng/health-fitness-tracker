import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Onboarding from './components/Onboarding/Onboarding';
import ProfileOverview from './components/ProfileOverview/ProfileOverview';
import ContactPage from './components/ContactPage/ContactPage';

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

  const themeClass =
    currentView === 'landing'
      ? 'theme-blue'
      : currentView === 'onboarding'
        ? 'theme-green'
        : currentView === 'profile'
          ? 'theme-blue'
          : 'theme-green';

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
      <div className={`app-shell ${themeClass}`}>
        <Onboarding
          profile={userProfile}
          onBack={() => setCurrentView('landing')}
          onSave={saveProfile}
        />
      </div>
    );
  }

  if (currentView === 'profile') {
    return (
      <div className={`app-shell ${themeClass}`}>
        <ProfileOverview
          profile={userProfile}
          onBackHome={() => setCurrentView('landing')}
          onEdit={() => setCurrentView('onboarding')}
        />
      </div>
    );
  }

  if (currentView === 'contact') {
    return (
      <div className={`app-shell ${themeClass}`}>
        <ContactPage onBack={() => setCurrentView('landing')} />
      </div>
    );
  }

  return (
    <div className={`app-shell ${themeClass}`}>
      <LandingPage
        onGetStarted={() => setCurrentView('onboarding')}
        onOpenContact={() => setCurrentView('contact')}
      />
    </div>
  );
}

export default App;
