import React from 'react';
import '../Styles/Contactus.css';

function ContactSection() {
  return (
    <div id="contact" className="contact-section text-light  py-5" style={{backgroundColor:"black"}}>
      <div className="container">
        <h2 className="text-center mb-5">
          Get <span className="text-primary border-bottom">In Touch</span>
        </h2>
        <div className="row">
          {/* Left - Contact Info */}
          <div className="col-md-6 mb-4">
            <h4 className="text-primary mb-4">Contact Information</h4>
            <div className="contact-info mb-3">
              <i className="fas fa-envelope contact-icon text-purple"></i>
              <div>
                <strong>Email</strong>
                <p>hanumansai41@gmail.com</p>
              </div>
            </div>
            <div className="contact-info mb-3">
              <i className="fas fa-map-marker-alt contact-icon text-purple"></i>
              <div>
                <strong>Location</strong>
                <p>Hyderabad,India</p>
              </div>
            </div>
            <div className="contact-info mb-3">
              <i className="fas fa-briefcase contact-icon text-purple"></i>
              <div>
                <strong>Work Status</strong>
                <p>Available for freelance & full-time opportunities</p>
              </div>
            </div>

            <h5 className="mt-4">Connect With Me</h5>
            <div className="social-icons mt-2">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="col-md-6">
            <div className="contact-form p-4 rounded bg-black">
              <h4 className="text-primary mb-4">Send Me a Message</h4>
              <form>
                <div className="mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control bg-dark text-light border-secondary" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label>Subject</label>
                  <input type="text" className="form-control bg-dark text-light border-secondary" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label>Message</label>
                  <textarea rows="4" className="form-control bg-dark text-light border-secondary" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-gradient w-100">
                  Send Message <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
