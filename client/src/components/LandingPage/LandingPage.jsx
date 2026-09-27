import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="topbar">
        <div className="brand">VitalTrack</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-copy">
          <span className="badge">Healthy habits, smarter progress</span>
          <h1>Track your fitness journey with clarity.</h1>
          <p>
            Monitor workouts, nutrition, daily movement, and long-term goals in one
            simple place.
          </p>

          <div className="cta-row">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Plans</button>
          </div>

          <div className="stats-row">
            <div>
              <strong>12k+</strong>
              <span>Active users</span>
            </div>
            <div>
              <strong>87%</strong>
              <span>Goal consistency</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>User rating</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-card">
            <span className="label">Today</span>
            <h3>7,540 steps</h3>
            <p>Goal: 10,000</p>
          </div>
          <div className="mini-card accent">
            <span className="label">Workout</span>
            <h3>45 min</h3>
            <p>Cardio + strength</p>
          </div>
          <div className="mini-card">
            <span className="label">Calories</span>
            <h3>1,940</h3>
            <p>Target maintained</p>
          </div>
        </div>
      </main>

      <section id="features" className="feature-section">
        <div className="section-heading">
          <span>Features</span>
          <h2>Everything you need to build a stronger routine.</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-box">
            <h3>Workout Tracking</h3>
            <p>Log exercises, set goals, and keep progress visible over time.</p>
          </article>
          <article className="feature-box">
            <h3>Nutrition Goals</h3>
            <p>Stay on top of calories, hydration, and eating consistency.</p>
          </article>
          <article className="feature-box">
            <h3>Progress Insights</h3>
            <p>Spot improvements, trends, and motivation from your daily habits.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
