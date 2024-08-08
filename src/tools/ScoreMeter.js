import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ScoreMeter = (props) =>{
    const {score} = props;
    const [value, setValue] = useState(0);

    //Function for Calculating Color
    const calcColor = (percent,start, end) => {
        let a = percent / 100,
        b = (end - start) * a,
        c = b + start;

        return "hsl(" + c + ", 100%, 50%)";
    }

    //Function for Animation
    useEffect(() => {
        const intervalTime = 50; // Time in milliseconds
        const incrementStep = 1; // Step to increase value per interval

        // Stop the animation when score is already set
        if (value >= score) return;

        // Set up the interval to increment value
        const intervalId = setInterval(() => {
            setValue((prevValue) => {
                // Check if we have reached or exceeded the target score
                if (prevValue >= score) {
                    clearInterval(intervalId);
                    return score;
                }
                return prevValue + incrementStep;
            });
        }, intervalTime);

        // Cleanup interval on component unmount or score change
        return () => clearInterval(intervalId);
    }, [score, value]);

    return (
        <div>
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                circleRatio={0.7}
                styles={{
                    trail:{
                        strokeLinecap: "round",
                        transform : "rotate(-126deg)",
                        transformOrigin: "center center"
                    },
                    path: {
                        strokeLinecap: "round",
                        transform : "rotate(-126deg)",
                        transformOrigin: "center center",
                        stroke: calcColor(value, 0, 120),  
                    },
                    text:{
                        fill: "#ddd"
                    }
                }}  
                strokeWidth={10}
            />
        </div>
    )
}