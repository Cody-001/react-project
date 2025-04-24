import logo from "../assets/img/logo/logo.png";
import hero1 from "../assets/img/gallery/h1_hero1.jpg";
import scissors from "../assets/img/icon/scissors.svg";
import { useStateScroll } from "../hooks/useStateScroll";



function Home() {
  return (
    <>
      <section id="home">
        {/* homes starts here */}
        <div>
          <header>
            <div className=" header-area">
              <div className="headerSticky main-header header-sticky">
                <div className="container-fluid">
                  <div className="headerTop d-flex align-items-center justify-content-between flex-wrap">
                    <div className=" header-info-left d-flex align-items-center">


                    </div>
                    <div className="header-righ ">
                      <div className="navbar">
                        <div className="logo">
                          <a href="index.html"><img src={logo} alt="" /></a>
                        </div>

                        <div className="main-menu d-none d-lg-block">
                          <nav>
                            <span> </span>
                            <ul id="navigation">
                              <li><a href="#home" onClick={() => useStateScroll("#home")} >Home</a></li>
                              <li><a href="#about" onClick={() => useStateScroll("#about")} >About</a></li>
                              <li><a href="#service" onClick={() => useStateScroll("#service")}>Service</a></li>
                              <li><a href="#gallery" onClick={() => useStateScroll("#gallery")}>Gallery</a></li>
                              <li><a href="#blog" onClick={() => useStateScroll("#blog")}>Blog</a>
                                <ul className="submenu">
                                  <li><a href="blog.html">Blog</a></li>
                                  <li><a href="blog_details.html">Blog Details</a></li>
                                  <li><a href="elements.html">Elements</a></li>
                                </ul>
                              </li>
                              <li><a href="#contact" onClick={() => useStateScroll("#contact")}>Contact</a></li>

                              <li className="header-right-btn"><a href="#" className="header-btn">Free Quote</a> </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* homes ends here */}
        <div className="slider-area  position-relative">
          <div className="slider-active">

            <div className="single-slider">
              <div className="slider-cap-wrapper slider-height">
                <div className="hero-caption">
                  <img src={scissors} alt="" data-animation="fadeInUp" data-delay=".4s" />
                  <h1 data-animation="fadeInUp" data-delay=".4s">WE'RE THE LAST OF BREED.</h1>
                  <p data-animation="fadeInUp" data-delay=".7s">Achieve your Dream Style</p>
                  <a href="#" className="btn hero-btn" data-animation=" fadeInUp" data-delay=".7s">Book Now</a>
                </div>
                <div className="hero-img position-relative">
                  <img src={hero1} alt="" data-animation="pulse" data-transition-duration="5s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home