import './ContactPage.css';

function ContactPage({ onBack }) {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <button type="button" className="back-btn" onClick={onBack}>← Back</button>

        <p className="contact-label">Contact</p>
        <h1>For more information and great yet simple websites</h1>

        <div className="contact-box">
          <p>Please contact:</p>
          <strong>Aryan Saxena</strong>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
