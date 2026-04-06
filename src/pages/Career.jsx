import React, { useState } from "react";
import "./career.css";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isSubmittingRef = React.useRef(false);

  const onSubmit = () => {
    // We let the native HTML form submit to the hidden iframe,
    // but we trigger our loading state here.
    setIsSubmitting(true);
    isSubmittingRef.current = true;
    setResultMessage("");
  };

  const handleIframeLoad = () => {
    if (isSubmittingRef.current) {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
      setIsSuccess(true);
      setResultMessage(t("career.success_msg"));
      document.getElementById("careerForm").reset();
    }
  };

  return (
    <main className="career-page">
      {/* Hero Banner inside Career, consistent with Contact/About */}
      <section className="hero-banner">
        <div
          className="hero-banner__bg-image"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084")`,
          }}
        ></div>
        <div className="hero-banner__overlay"></div>
        <div className="container">
          <h1 className="hero-banner__title">{t("career.title")}</h1>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="career-section">
        <div className="container">
          <div className="career-form-wrapper">
            <div className="career-intro">
              <h2>{t("career.subtitle")}</h2>
            </div>

            {/* Hidden iframe to prevent page reload on form submit */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: "none" }} 
              onLoad={handleIframeLoad}
              title="Hidden Frame"
            ></iframe>

            <form 
              id="careerForm"
              action="https://formsubmit.co/info@alogistics.ge" 
              method="POST" 
              encType="multipart/form-data" 
              target="hidden_iframe"
              onSubmit={onSubmit} 
              className="career-form"
            >
              {/* FormSubmit specific hidden fields */}
              <input type="hidden" name="_subject" value="New Career Application from Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Form Input Grid */}
              <div className="career-form__grid">
                {/* First Name */}
                <div className="form-group">
                  <label htmlFor="first_name">{t("career.name_label")} *</label>
                  <input
                    type="text"
                    id="first_name"
                    name="First Name"
                    required
                    className="form-control"
                  />
                </div>

                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="last_name">
                    {t("career.lastname_label")} *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="Last Name"
                    required
                    className="form-control"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">{t("career.email_label")} *</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    required
                    className="form-control"
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">{t("career.phone_label")} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="Phone Number"
                    required
                    className="form-control"
                  />
                </div>
              </div>

              {/* CV Upload */}
              <div className="form-group form-group--full">
                <label htmlFor="cv_upload">
                  {t("career.cv_label")} (.pdf, .doc, .docx) *
                </label>
                <div className="file-upload-wrapper">
                  <span className="material-symbols-outlined file-upload-icon">
                    upload_file
                  </span>
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
                <button
                  type="submit"
                  className="btn btn--primary btn--submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : t("career.submit_btn")}
                </button>
              </div>

              {resultMessage && (
                <div
                  className={`form-message ${isSuccess ? "form-message--success" : "form-message--error"}`}
                >
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
