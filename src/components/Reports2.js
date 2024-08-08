import { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/background-bg.png";

export const Reports = () => {

  const [countOfProgess1, setCountOfProgess1] = useState(0);
  const [countOfProgess2, setCountOfProgess2] = useState(0);
  const [countOfProgess3, setCountOfProgess3] = useState(0);
  const [countOfProgess4, setCountOfProgess4] = useState(0);

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
        return Math.min(oldProgress + Math.random() * 10, 90);
      });
      setCountOfProgess2((oldProgress) => {
        if (100 == oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 70);
      });
      setCountOfProgess3((oldProgress) => {
        if (100 == oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 50);
      });
      setCountOfProgess4((oldProgress) => {
        if (100 == oldProgress) return 0;
        return Math.min(oldProgress + Math.random() * 10, 20);
      });
    }, 499);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="reports" id="reports">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="reports-bx wow zoomIn">
                        <h2>Reports</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme reports-slider">
                            <div className="item">
                              <div className="prog-bar">
                                <ProgressBar className="bar" now={countOfProgess1} />
                                <div className="val">Current Progress is: {parseInt(countOfProgess1)} %</div>
                              </div>
                            </div>
                            <div className="item">
                            <div className="prog-bar">
                              <ProgressBar className="bar" now={countOfProgess2} />
                              <div className="val">Current Progress is: {parseInt(countOfProgess2)} %</div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="prog-bar">
                              <ProgressBar className="bar" now={countOfProgess3} />
                              <div className="val">Current Progress is: {parseInt(countOfProgess3)} %</div>
                            </div>
                            </div>
                            <div className="item">
                            <div className="prog-bar">
                              <ProgressBar className="bar" now={countOfProgess4} />
                              <div className="val">Current Progress is: {parseInt(countOfProgess4)} %</div>
                            </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
