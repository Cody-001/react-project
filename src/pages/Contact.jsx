import React from 'react'
import logo from "../assets/img/logo/logo.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Contact() {
  return (
    <section id='contact'>
    <div>
      <footer>
        <div className="footer-wrapper gray-bg">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="footerWrapper row justify-content-between">

                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="footer-tittle">
                      <h4>Contact Info</h4>
                      <ul>
                        <li><a href="#">913-473-7000</a></li>
                        <li><a href="#"><span className="__cf_email__" data-cfemail="c7a4a8a9b3a6a4b387a4a6aca2b4afa8b7e9a4a8aa">example@gmail.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="gridCol col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="singleFooter single-footer-caption mb-50">
                    <div className="single-footer-caption text-center mb-20">
                      {/* <!-- logo --> */}
                      <div className="footer-logo mb-35">
                        <a href="index.html"><img src={logo} alt="" /></a>
                      </div>
                      <p>There are many variations of <br></br> passages of Lorem Ipsum available <br></br> be the majority.</p>
                      {/* <!-- social --> */}
                      <div className="footer-social pt-30">
                        <a href="https://www.fb.com/sai4ull"><i className="fab fa-facebook"><RiFacebookFill /></i></a>
                        <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"> <FaLinkedinIn /> </i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="singleLeft single-footer-caption mb-50">
                    <div className="icon">
                      <i className="fas fa-location-arrow"></i>
                    </div>
                    <div className="footer-tittle">
                      <h4>Contact Info</h4>
                      <ul>
                        <li><a href="#">913-473-7000</a></li>
                        <li><a href="#"><span className="__cf_email__" data-cfemail="21424e4f554042556142404a4452494e510f424e4c">example@gmail.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- footer-bottom area --> */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>Copyright &copy;<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="nofollow noopener">Colorlib</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </section>
  )
}

export default Contact