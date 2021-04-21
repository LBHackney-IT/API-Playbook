import React from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src="../../assets/images/logo-long.svg" />
          <span className="brand-text">API Playbook</span>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="https://github.com/LBHackney-IT">Github</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-wrapper bgs-primary">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center jumbo-container">
            <img src="../../assets/images/api_playbook_logo.png" alt="Main logo" />
            <h1>HackIT API Playbook</h1>
            <div className="span-wrapper">
              <span>The HackIT API Playbook contains everything you need to start building APIs for Hackney services along with best practices.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="features-container-wrapper">
      <div className="container">
        <div className="row spaced-features">
          <div className="col-12 col-md-4">
            <div className="feature">
              <h2 id="front-end-development">For Service Users</h2>
              <p>APIs have become an essential part of Hackney’s digital Transformation.
  Our Playbook provides a consistent standard of implementation .</p>
              <button id="get-started"><a href="https://playbook.hackney.gov.uk/API-Playbook/">Get started</a></button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature">
              <h2 id="back-end-development">For Developers</h2>
              <p> It is primarily used to onboard new developers, but also for external members willing to understand of the way that we implement APIs within the Organisation.</p>
              <button id="see-docs"><a href="https://playbook.hackney.gov.uk/API-Playbook/">See docs</a></button>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="feature">
              <h2 id="back-end-development">Contact</h2>
              <p>For further information or to provide feedback please contact our API team</p>
              <button id="contact-us"><a href="https://playbook.hackney.gov.uk/API-Playbook/contact_us">Contact us</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_copyright"><span>Made by HackIT.</span></div>
    </React.Fragment>
  );
}

export default Home;
