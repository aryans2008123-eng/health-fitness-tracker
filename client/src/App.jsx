import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Onboarding from './components/Onboarding/Onboarding';
import ProfileOverview from './components/ProfileOverview/ProfileOverview';

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

  if (currentView === 'onboarding') {
    return (
      <Onboarding
        profile={userProfile}
        onBack={() => setCurrentView('landing')}
        onSave={(profile) => {
          setUserProfile(profile);
          setCurrentView('profile');
        }}
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
