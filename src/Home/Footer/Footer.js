import { faBehance, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../../images/logo.png";
import FooterCol from './FooterCol';

const column1 = [
  {name: "Features",link: "/features"},
  {name: "Enterprises",link: "/enterprises"},
  {name: "Pricing",link: "/pricing"}
]
const column2 = [
  {name: "Blog",link: "/blog"},
  {name: "Help Center",link: "/helpCenter"},
  {name: "Contact Us",link: "/contactUs"},
  {name: "Status",link: "/status"}
]
const column3 = [
  {name: "About Us",link: "/aboutUs"},
  {name: "Terms of Service",link: "/termsOfService"},
  {name: "Security",link: "/security"},
  {name: "Login",link: "/login"}
]




const Footer = () => {
  return (
    <div className="footer text-center m-2 py-5">
      <div className="footer-caption mb-5">
        <h1 className="p-3">Get your design right, right now</h1>
        <p>Be the first to know our latest offers and updates!</p>
      </div>
      <div className="email-box my-5">
        <div className="input-group ">
          <input type="email" className="form-control mt-1" placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="button-addon2" />
          <button className="btn get-started-btn" type="button" id="button-addon2">Get started</button>
        </div>
      </div>
      <div className="footer-main container my-5 py-5">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="row">
              <div>
                <img src={logo} alt="Athena" />
              </div>
              <div>
              <ul className="social-media list-inline mt-4">
                  <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon" icon={faFacebook} /></a></li>
                  <li className="list-inline-item"><a href="//twitter.com"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                  <li className="list-inline-item"><a href="//linkedin.com"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                  <li className="list-inline-item"><a href="//dribble.com"><FontAwesomeIcon className="icon" icon={faBasketballBall} /></a></li>
                  <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faBehance} /></a></li>
              </ul>
              </div>
            </div>
          </div>
          <FooterCol menuItems={column1}/>
          <FooterCol menuItems={column2}/>
          <FooterCol menuItems={column3}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;