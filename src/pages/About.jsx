import rightArrows from "../assets/img/icon/right-arrow.svg";
import about1 from "../assets/img/gallery/about1.jpg";

import React from 'react'

function About() {
  return (
    <section id="about">
      <div>
        <section className="aboutpadding about-area section-padding">
          <div className="container ">
            <div className="aboutFlex row align-items-center justify-content-between">
              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-9">
                <div className="about-caption mb-40">
                  {/* <!-- Single --> */}
                  <div className="aboutIcon about-single mb-10 d-flex">
                    <div className="icon">
                      <img src={rightArrows} alt="" />
                    </div>
                    <div className="pera">
                      <span>Be the majority have suffered alteration in some form, by injected humour.</span>
                    </div>
                  </div>
                  {/* <!-- Single --> */}
                  <div className="aboutIcon about-single mb-10 d-flex">
                    <div className="icon">
                      <img src={rightArrows} alt="" />
                    </div>
                    <div className="pera">
                      <span>Psum available be the majority have suffered alteration in some form, by injected humour.</span>
                    </div>
                  </div>
                  {/* <!-- Single --> */}
                  <div className="aboutIcon about-single mb-10 d-flex">
                    <div className="icon">
                      <img src={rightArrows} alt="" />
                    </div>
                    <div className="pera">
                      <span>Available be the majority have suffered alteration in some form, by injected humour.</span>
                    </div>
                  </div>
                  {/* <!-- Single --> */}
                  <div className="aboutIcon about-single mb-10 d-flex">
                    <div className="icon">
                      <img src={rightArrows} alt="" />
                    </div>
                    <div className="pera">
                      <span>Humour available be the majority have suffered alteration in some form, by injected.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="about-img mb-30">
                  <img src={about1} alt="" />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-6">
                <div className=" aboutCaption about-caption ">
                  {/* <!-- Section Tittle --> */}
                  <div className="section-tittle mb-25">
                    <h2>ABOUT Our STORY</h2>
                    <p className="pt-20">There are many variations of  passages of Lorem Ipsum available
                      be the majority have suffered alteration in some form, by injected humour or randomised words.</p>
                  </div>
                  <a href="#" className="btn_01">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  )
}

export default About