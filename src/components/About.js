import 'react-multi-carousel/lib/styles.css';
import ListGroup from 'react-bootstrap/ListGroup';
import svgBug from '../assets/img/bug-spider.svg';
import svgShield from '../assets/img/shield-warning.svg';
import svgCard from '../assets/img/card-search.svg';
import svgSecurity from '../assets/img/security2.svg';

export const About = () => {

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
    <section className="about" id="about">
        <div className="container">
            <div className="col-12">
              <h2 className="abt-heading" >How Sitefend Checks Code Security</h2>
                {/* List Section */}
                <div className="about-bx wow zoomIn">
                    <div className="sub-sec">
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                        <img src={svgBug} alt="Bug Svg" className="abt-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="abt-subhead">Advanced Vulnerability Detection</div>
                            <p className="">Sitefend uses cutting-edge AI technology to identify potential security vulnerabilities in your code, ensuring that no flaw goes unnoticed.</p>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                        <img src={svgShield} alt="Shield Warning Svg" className="abt-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="abt-subhead">Severity Assessment</div>
                            <p className="">Each identified vulnerability is assessed for its severity, helping you prioritize fixes that will have the most significant impact on your application's security.</p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup as="ol" numbered>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                        <img src={svgSecurity} alt="Security Svg" className="abt-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="abt-subhead">Best Practices Recommendations</div>
                            <p className="">Sitefend provides actionable suggestions to improve your code's security posture by recommending industry best practices that are not currently implemented.</p>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between align-items-start list-item">
                        <img src={svgCard} alt="Card Svg" className="abt-svgs"/>
                          <div className="ms-2 me-auto">
                            <div className="abt-subhead">Comprehensive Security Score</div>
                            <p className="">After analyzing your code, Sitefend generates an overall security score, giving you a clear, concise measure of your code's security health.</p>
                          </div>
                        </ListGroup.Item>
                      </ListGroup>
                    </div>
                </div>
                <br/>

                {/* Why Use Sitefend Section */}
                <div className="about-bx wow zoomIn">
                <h3>Why Use Sitefend?</h3>
                    <p>Sitefend offers a fast, reliable, and easy-to-use solution for developers to ensure their code is secure. With Sitefend, you get peace of mind knowing that your application is protected against potential threats, allowing you to focus on building great features instead of worrying about security vulnerabilities.</p>
                </div>

                {/* How to check - Section */}
                <div className="about-bx wow zoomIn">
                <h3>How to Check if a Code is Secure?</h3>
                <div className="abt-subhead">Using Sitefend is simple:</div>
                    <p>
                      <ol>
                        <li>Paste your code snippet into the input box.</li>
                        <li>Click the <span style={{color :'#1F4E79', fontWeight:'bold'}}>"Check Security"</span> button.</li>
                        <li>Receive a detailed security report highlighting vulnerabilities, suggested fixes, and best practices.</li>
                        <li>Implement the recommendations and recheck as needed.
                        </li>
                      </ol>
                    </p>
                </div>

                {/* About Sitefend - Section */}
                <div className="about-bx wow zoomIn">
                <h3>About Sitefend</h3>
                    <p>Sitefend is dedicated to providing developers with an efficient, reliable tool to secure their code. Leveraging advanced AI technology, Sitefend ensures that your code is free from vulnerabilities, follows best practices, and meets the highest security standards. Protect your applications with Sitefend and build with confidence.</p>
                </div>

                {/* Is Sitefend Safe - Section */}
                <div className="about-bx wow zoomIn">
                <h3>Is SiteFend Safe?</h3>
                    <p>Absolutely. Sitefend uses state-of-the-art security protocols to ensure that your code remains confidential and protected throughout the analysis process. Your data is never stored or shared, ensuring complete privacy and security. Trust Sitefend to keep your code safe while providing the insights you need to strengthen your application's security.</p>
                </div>

            </div>
        </div>
    </section>
  )
}
