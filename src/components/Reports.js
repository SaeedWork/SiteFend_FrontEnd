import { useState, useEffect } from "react";
import 'react-multi-carousel/lib/styles.css';
import ListGroup from 'react-bootstrap/ListGroup';
import vulnerabilitySvg from '../assets/img/vulneribility-svg.svg';
import suggestedFixes from '../assets/img/suggested-fix-yellow.svg';
import bestPractice from '../assets/img/best-practice-green.svg';
import { ScoreMeter } from "../tools/ScoreMeter";

export const Reports = () => {

  const [securityScore, setSecurityScore] = useState();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="reports" id="reports">
        <div className="container">
            <div className="col-12">
              {/* Overall Code Security Results */}
            <div className="reports-bx wow zoomIn">
                    <h2>Audit Results</h2>
                    <br/>
                    <h3>Overall Code Security Score</h3>
                    <div className="sub-sec">
                      <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text.</p>
                      <ScoreMeter score={80} className="meter"/>
                    </div>
                  <br/>
                {/* Deatailed Results Section */}
                    <h3>Audit Result Details</h3>
                    <div className="sub-sec">
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                        <img src={vulnerabilitySvg} alt="Vulnerability SVG" className="report-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="detail-subhead" style={{color:"#d94453"}}>Vulnerabilities</div>
                            <p className="">The code uses user input directly in a SQL query, which could allow an attacker to execute arbitrary SQL commands.</p>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                          <img src={suggestedFixes} alt="Suggested Fixes SVG" className="report-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="detail-subhead" style={{color:"#e7d323"}}>Suggested Fixes</div>
                            <p className="">The code uses a weak hashing algorithm (MD5) to store user passwords, which is not secure.</p>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                        <img src={bestPractice} alt="Best Practice SVG" className="report-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="detail-subhead" style={{color:"#3c9b40"}}>Best Practices</div>
                            <p>The code appears to be secure and does not contain any critical vulnerabilities.</p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
