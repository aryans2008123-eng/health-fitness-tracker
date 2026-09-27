import './ProfileOverview.css';

const defaultHealthStats = [
  { label: 'Steps', value: 0, type: 'counter' },
  { label: 'Heart Rate', value: 'unchecked', type: 'text' },
  { label: 'Blood Pressure', value: 'unchecked', type: 'text' },
  { label: 'Calories Burned', value: 0, type: 'counter' },
  { label: 'Water Intake', value: 0, type: 'counter' },
  { label: 'Sleep', value: 'unchecked', type: 'text' },
];

function ProfileOverview({ profile, onBackHome, onEdit }) {
  const safeProfile = profile || {
    name: 'Guest User',
    age: 0,
    weight: 0,
    height: 0,
    goal: 'General wellness',
    focus: [],
  };

  const healthStats = defaultHealthStats.map((stat) => ({
    ...stat,
    value:
      stat.type === 'counter' && !Number.isFinite(stat.value)
        ? 0
        : stat.value,
  }));

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-block">
            <div className="avatar">{safeProfile.name?.charAt(0)?.toUpperCase() || 'U'}</div>
          </div>

          <div className="profile-title-wrap">
            <p className="eyebrow">Profile overview</p>
            <h1>{safeProfile.name || 'Guest User'}</h1>
          </div>
        </div>

        <div className="profile-body">
          <section className="info-panel">
            <h2>Basic details</h2>
            <div className="detail-list">
              <div><span>Age</span><strong>{safeProfile.age || 0}</strong></div>
              <div><span>Weight</span><strong>{safeProfile.weight || 0} kg</strong></div>
              <div><span>Height</span><strong>{safeProfile.height || 0} cm</strong></div>
              <div><span>Main goal</span><strong>{safeProfile.goal || 'General wellness'}</strong></div>
            </div>
          </section>

          <section className="focus-panel">
            <h2>Focus areas</h2>
            <div className="focus-list">
              {(safeProfile.focus && safeProfile.focus.length > 0
                ? safeProfile.focus
                : ['Walking', 'Running', 'Diet']
              ).map((item) => (
                <span key={item} className="focus-pill">{item}</span>
              ))}
            </div>
          </section>
        </div>

        <section className="health-panel">
          <h2>Daily health metrics</h2>
          <div className="metric-grid">
            {healthStats.map((stat) => (
              <div key={stat.label} className="metric-box">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <div className="profile-actions">
          <button className="secondary-btn" onClick={onBackHome}>Back to home</button>
          <button className="primary-btn" onClick={onEdit}>Edit profile</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileOverview;
