import React from 'react'
import instra1 from "../assets/img/gallery/instra1.jpg";
import instra2 from "../assets/img/gallery/instra2.jpg";
import instra3 from "../assets/img/gallery/instra3.jpg";
import instra4 from "../assets/img/gallery/instra4.jpg";
import service1 from "../assets/img/icon/services1.svg";
import service2 from "../assets/img/icon/services2.svg";
import service3 from "../assets/img/icon/services3.svg";

function Gallery() {
  return (
    <section id='gallery'>
    <div>
      <section className="sectionImg categories-area section-img-bg2" >
        <div className=" container">
          <div className="sectionContainer row">
            <div className="grid-content">
              <div className="single-cat text-center mb-30">
                <div className="cat-icon">
                  <img src={service1} alt="" />
                </div>
                <h5><a href="services.html">Stylish hair cut</a></h5>
                <div className="cat-cap">
                  <p>Available be the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
            <div className="grid-content">
              <div className="single-cat text-center mb-30">
                <div className="cat-icon">
                  <img src={service2} alt="" />
                </div>
                <h5><a href="services.html">Cut & hair style</a></h5>
                <div className="cat-cap">
                  <p>Available be the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
            <div className="grid-content">
              <div className="single-cat text-center mb-30">
                <div className="cat-icon">
                  <img src={service3} alt="" />
                </div>
                <h5><a href="services.html">Color & hair wash</a></h5>
                <div className="cat-cap">
                  <p>Available be the majority have suffered alteration in some form, by injected humour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="instagram-area fix">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="instagram-active owl-carousel">
                <div className="single-instagram">
                  <img src={instra1} alt="" />
                </div>
                <div className="single-instagram">
                  <img src={instra2} alt="" />
                </div>
                <div className="single-instagram">
                  <img src={instra3} alt="" />
                </div>
                <div className="single-instagram">
                  <img src={instra4} alt="" />
                </div>
                <div className="single-instagram">
                  <img src={instra2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Gallery