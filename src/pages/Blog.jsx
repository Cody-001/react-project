import React from 'react'
import customer1 from "../assets/img/gallery/customer1.png";
import customer2 from "../assets/img/gallery/customer2.png";
import customer3 from "../assets/img/gallery/customer3.png";
import { FaRegStar } from "react-icons/fa";

function Blog() {
  return (
    <section id='blog'>
    <div>  <section className="customer-section section-padding">
      <div className="container">
        <div className="testimonialRow justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-7">
            {/* <!-- Section Tittle --> */}
            <div className="section-tittle section-tittle2 text-center mb-50">
              <h2>Customers Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="rowCol row">
          <div className="col-lg-4 col-md-4 col-sm-6 p-0">
            <div className="single-cat mb-30">
              <div className="cat-cap">
                <div className="rating">
                  <ul>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                  </ul>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor  dunt ulter labore et dolore magna.</p>
              </div>
              <div className="cat-img">
                <img src={customer1} alt="" />
                <p >Wilma Mumduya</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 p-0">
            <div className="single-cat mb-30">
              <div className="cat-cap">
                <div className="rating">
                  <ul>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                  </ul>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor  dunt ulter labore et dolore magna.</p>
              </div>
              <div className="cat-img">
                <img src={customer2} alt="" />
                <p>Jimmy Changa</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 p-0">
            <div className="single-cat mb-30">
              <div className="cat-cap">
                <div className="rating">
                  <ul>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                    <li><i className="fas fa-star"><FaRegStar /></i></li>
                  </ul>
                </div>
                <p>"Consectetur adipiscing elit, sed do eiusmod tempor  dunt ulter labore et dolore magna.</p>
              </div>
              <div className="cat-img">
                <img src={customer3} alt="" />
                <p>Wilma Mumduya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </section>
  )
}

export default Blog