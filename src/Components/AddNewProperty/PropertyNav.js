import React from 'react';
import './AddProperty.css';

export default function PropertyNav({ step, navStep }) {

    const changeStep = (event) => {
        const stepNav = event.currentTarget.id;
        console.log(stepNav);
        if (stepNav === "basic_info") {
            navStep(1);
        }
        else if (stepNav === "property_detail") {
            navStep(2);
        }
        else if (stepNav === "general_info") {
            navStep(3);
        }
        else if (stepNav === "location_info") {
            navStep(4);
        }

    }
    return (
        <>
            <div id='bars'>
                <div id="basic_info" className={`${step === 1 ? "active" : ""}`} onClick={changeStep}>
                    <span className={`${step === 1 ? "numActive" : "noNumActive"}`}>1</span> Basic Info
                </div>
                <div id="property_detail" className={`${step === 2 ? "active" : undefined}`} onClick={changeStep}>
                    <span className={`${step === 2 ? "numActive" : "noNumActive"}`}>2</span> Property Detail
                </div>
                <div id="general_info" className={`${step === 3 ? "active" : undefined}`} onClick={changeStep}>
                    <span className={`${step === 3 ? "numActive" : "noNumActive"}`}>3</span> General Info
                </div>
                <div id="location_info" className={`${step === 4 ? "active" : undefined}`} onClick={changeStep}>
                    <span className={`${step === 4 ? "numActive" : "noNumActive"}`}>4</span> Location Info
                </div>
            </div>
        </>
    );
};