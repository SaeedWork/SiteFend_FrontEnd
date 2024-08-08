import { useState, useEffect } from "react";
import 'react-multi-carousel/lib/styles.css';
import Spinner from 'react-bootstrap/Spinner';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TrackVisibility from 'react-on-screen';


export const Analyze = () => {

  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const progValue = 60;
  const [countOfProgess1, setCountOfProgess1] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCountOfProgess1((oldProgress) => {
        if (100 == oldProgress) return 0;
        return Math.round(Math.min(oldProgress + Math.random() * 10, 90));
      });
    }, 499);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = async () => {
    const response = await fetch("https://backend-url-from-replit/analyze/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code_snippet: code }),
    });

    const data = await response.json();
    setResult(data.secure ? "Code is Secure" : "Code is Not Secure");
  };

  return (
    <section className="analyze" id="analyze">
        <div className="container">
            <div className="col-12">
                <div className="analyze-bx wow zoomIn">
                    <h2>Code Security Audit</h2>
                    <p>Identify Potential Vulnerabilities in your code. Paste your code below and click "Check Code" to get started</p>
                    <div className="sub-sec">
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                          {/* <img src={headerImg} alt="Header Img"/> */}
                          <div className="txt-bx">
                            <textarea className="text-area" value={code} onChange={(e) => setCode(e.target.value)} />
                             <div className="check-bar"> 
                            <ProgressBar now={countOfProgess1} label={`${countOfProgess1}%`} className="prog-bar" variant="prog"/>
                            <button onClick={handleSubmit} className="check-btn"><Spinner animation="grow" size="sm" className="load-circle"/>Check Security</button>
                            </div>
                            <p>{result}</p>
                          </div>
                        </div>}
                    </TrackVisibility>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
