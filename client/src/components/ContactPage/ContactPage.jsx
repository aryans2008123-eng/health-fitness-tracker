import './ContactPage.css';

function ContactPage({ onBack }) {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <button type="button" className="back-btn" onClick={onBack}>← Back</button>

        <p className="contact-label">Contact</p>
        <h1>Get in touch</h1>

        <p className="contact-summary">
          For more information, contact: Aryan Saxena (aryans2008123@gmail.com) for personal enquiries and work related enquiries. For professional and institutional enquiries: (26f2005721@ds.study.iitm.ac.in).
        </p>

        <div className="contact-box">
          <p>Personal enquiries</p>
          <strong>Aryan Saxena</strong>
          <a href="mailto:aryans2008123@gmail.com">aryans2008123@gmail.com</a>
        </div>

        <div className="contact-box secondary">
          <p>Professional and institutional enquiries</p>
          <a href="mailto:26f2005721@ds.study.iitm.ac.in">26f2005721@ds.study.iitm.ac.in</a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
