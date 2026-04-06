import React, { useState } from 'react';
import './career.css';
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResultMessage('');

    // Prepare Web3Forms payload
    const formData = new FormData(event.target);
    
    // Replace YOUR_ACCESS_KEY_HERE with actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "New Career Application from Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setResultMessage(t('career.success_msg'));
        event.target.reset();
      } else {
        setIsSuccess(false);
        setResultMessage(data.message || t('career.error_msg'));
      }
    } catch (error) {
      console.error("Form submission error", error);
      setIsSuccess(false);
      setResultMessage(t('career.error_msg'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="career-page">
      {/* Hero Banner inside Career, consistent with Contact/About */}
      <section className="hero-banner">
        <div
          className="hero-banner__bg-image"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084")`
          }}
        ></div>
        <div className="hero-banner__overlay"></div>
        <div className="container">
          <h1 className="hero-banner__title">{t('career.title')}</h1>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="career-section">
        <div className="container">
          <div className="career-form-wrapper">
            <div className="career-intro">
              <h2>{t('career.subtitle')}</h2>
            </div>
            
            <form onSubmit={onSubmit} className="career-form">
              {/* Form Input Grid */}
              <div className="career-form__grid">
                {/* First Name */}
                <div className="form-group">
                  <label htmlFor="first_name">{t('career.name_label')} *</label>
                  <input type="text" id="first_name" name="First Name" required className="form-control" />
                </div>
                
                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="last_name">{t('career.lastname_label')} *</label>
                  <input type="text" id="last_name" name="Last Name" required className="form-control" />
                </div>
                
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">{t('career.email_label')} *</label>
                  <input type="email" id="email" name="Email" required className="form-control" />
                </div>
                
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">{t('career.phone_label')} *</label>
                  <input type="tel" id="phone" name="Phone Number" required className="form-control" />
                </div>
              </div>

              {/* CV Upload */}
              <div className="form-group form-group--full">
                <label htmlFor="cv_upload">{t('career.cv_label')} (.pdf, .doc, .docx) *</label>
                <div className="file-upload-wrapper">
                  <span className="material-symbols-outlined file-upload-icon">upload_file</span>
                  <input 
                    type="file" 
                    id="cv_upload" 
                    name="attachment" 
                    accept=".pdf, .doc, .docx, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                    required 
                    className="form-control-file" 
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group form-group--full">
                <button type="submit" className="btn btn--primary btn--submit" disabled={isSubmitting}>
                  {isSubmitting ? '...' : t('career.submit_btn')}
                </button>
              </div>

              {resultMessage && (
                <div className={`form-message ${isSuccess ? 'form-message--success' : 'form-message--error'}`}>
                  {resultMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;
