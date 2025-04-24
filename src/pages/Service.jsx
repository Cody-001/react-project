import AccordionExpandDefault from "../hooks/AccordionExpandDefault";
import about2 from "../assets/img/gallery/about2.jpg";

function Service() {
  return (
    <div id='service'>
      <section className="project-us pb-padding section-padding">
            <div className="service container">
              <div className="gridColumn row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-10">
                  <div className="section-tittle mb-30">
                    <h2>All We Do for You</h2>
                  </div>
                  <div className="project-caption mb-40">
                    <AccordionExpandDefault />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10">
                  <div className="project-right-cap">
                    <div className="projectImg project-right-img">
                      <img src={about2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Service