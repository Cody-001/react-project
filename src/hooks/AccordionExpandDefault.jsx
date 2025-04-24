import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div className='accordionItems'>
      <Accordion defaultExpanded>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span"><button className="accordion-button" type="button" data-bs-toggle="collapse" 
          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">For Hair</button></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            {/* <!-- Single --> */}
            <div className="single-items">
              <div className="price-items">
                <div className="price-left">
                  <div className="job-tittle">
                    <a href="#"><h4>Trim your Hair</h4></a>
                  </div>
                </div>
                <div className="price">
                  <p>From<span>$40</span></p>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="single-items">
              <div className="price-items">
                <div className="price-left">
                  <div className="job-tittle">
                    <a href="#"><h4>Special Beard Treatment</h4></a>
                  </div>
                </div>
                <div className="price">
                  <p>From<span>$40</span></p>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="single-items">
              <div className="price-items">
                <div className="price-left">
                  <div className="job-tittle">
                    <a href="#"><h4>Color your Beard</h4></a>
                  </div>
                </div>
                <div className="price">
                  <p>From<span>$40</span></p>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            <div className="single-items">
              <div className="price-items">
                <div className="price-left">
                  <div className="job-tittle">
                    <a href="#"><h4>Wax your Beard</h4></a>
                  </div>
                </div>
                <div className="price">
                  <p>From<span>$40</span></p>
                </div>
              </div>
            </div>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"><button className="accordion-button" type="button">For Beard</button></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             <div className="single-items">
                          <div className="price-items">
                            <div className="price-left">
                              <div className="job-tittle">
                                <a href="#"><h4>Trim your Hair</h4></a>
                              </div>
                            </div>
                            <div className="price">
                              <p>From<span>$40</span></p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Single --> */}
                        <div className="single-items">
                          <div className="price-items">
                            <div className="price-left">
                              <div className="job-tittle">
                                <a href="#"><h4>Special Beard Treatment</h4></a>
                              </div>
                            </div>
                            <div className="price">
                              <p>From<span>$40</span></p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Single --> */}
                        <div className="single-items">
                          <div className="price-items">
                            <div className="price-left">
                              <div className="job-tittle">
                                <a href="#"><h4>Color your Beard</h4></a>
                              </div>
                            </div>
                            <div className="price">
                              <p>From<span>$40</span></p>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Single --> */}
                        <div className="single-items">
                          <div className="price-items">
                            <div className="price-left">
                              <div className="job-tittle">
                                <a href="#"><h4>Wax your Beard</h4></a>
                              </div>
                            </div>
                            <div className="price">
                              <p>From<span>$40</span></p>
                            </div>
                          </div>
                        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

