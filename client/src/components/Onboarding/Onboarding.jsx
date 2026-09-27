import { useState } from 'react';
import './Onboarding.css';

const defaultProfile = {
  name: '',
  age: '',
  weight: '',
  height: '',
  goal: '',
  focus: [],
};

const focusOptions = ['Walking', 'Running', 'Diet', 'Strength', 'Mobility', 'HIIT'];

function Onboarding({ profile, onSave, onBack }) {
  const [formData, setFormData] = useState({
    ...defaultProfile,
    ...profile,
    focus: profile?.focus || [],
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocusToggle = (option) => {
    setFormData((prev) => {
      const isSelected = prev.focus.includes(option);
      return {
        ...prev,
        focus: isSelected
          ? prev.focus.filter((item) => item !== option)
          : [...prev.focus, option],
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.weight || !formData.height) {
      setMessage('Please fill in your name, weight, and height.');
      return;
    }

    const profilePayload = {
      ...formData,
      weight: Number(formData.weight),
      height: Number(formData.height),
      age: Number(formData.age || 0),
    };

    setMessage('Saving profile...');

    try {
      await onSave(profilePayload);
      setMessage('Profile saved successfully.');
    } catch (error) {
      setMessage(error.message || 'Unable to save profile.');
    }
  };

  return (
    <div className="onboarding-page">
      <div className="onboarding-card">
        <button className="back-btn" onClick={onBack}>← Back</button>

        <h1>Set up your fitness profile</h1>
        <p className="subtitle">Tell us a little about your body and your goals.</p>

        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="field-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </label>

            <label>
              Age
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="25"
              />
            </label>
          </div>

          <div className="field-row">
            <label>
              Current weight (kg)
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="70"
              />
            </label>

            <label>
              Height (cm)
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="175"
              />
            </label>
          </div>

          <label>
            Main goal
            <input
              type="text"
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              placeholder="Lose weight, build muscle, improve stamina..."
            />
          </label>

          <div className="focus-section">
            <p>Focus areas</p>
            <div className="chip-group">
              {focusOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`chip ${formData.focus.includes(option) ? 'selected' : ''}`}
                  onClick={() => handleFocusToggle(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {message && <p className="message">{message}</p>}

          <button type="submit" className="save-btn">Save profile</button>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;
