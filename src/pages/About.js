import React from 'react';
import cade_profile from '../assets/cade_profile.jpg';
import henry_profile from '../assets/Henry.jpg';
import isu from '../assets/isu.jpg';



const About = () => {
  return (
    <div className="container mt-4 text-center">
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              src={cade_profile}
              className="card-img-top"
              alt="Cade Bradford"
            />
            <div className="card-body">
              <h5 className="card-title">Cade Bradford</h5>
              <p className="card-text">
                My name is <span style={{ fontWeight: "bold" }}>Cade Bradford</span>. I am
                a student at Iowa State University currently in Coms 319 and my
                email is <span style={{ fontWeight: "bold" }}>cadebrad@iastate.edu</span>.
              </p>
              <a
                href="https://www.linkedin.com/in/cadebradford"
                className="btn btn-primary"
              >
                Checkout my LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              src={henry_profile}
              className="card-img-top"
              alt="Henry Easter"
              style={{ height: "430px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Henry Easter</h5>
              <p className="card-text">
                My name is <span style={{ fontWeight: "bold" }}>Henry Easter</span>. I am
                a student at Iowa State University currently in Coms 319 and my
                email is <span style={{ fontWeight: "bold" }}>heaster@iastate.edu</span>.
              </p>
              <a
                href="https://www.instagram.com/heaster17"
                className="btn btn-primary"
              >
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              src={isu}
              className="card-img-top"
              alt="Iowa State University"
            />
            <div className="card-body">
              <h5 className="card-title">Iowa State University</h5>
              <p className="card-text">
                We attend Iowa State University and are both in 319 studying under
                Doctor Abraham Aldaco. The current date is
                <span style={{ fontWeight: "bold" }}>9/16/24</span>.
              </p>
              <a href="https://www.iastate.edu/" className="btn btn-primary">
                Visit our School's Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
