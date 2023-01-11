import React from 'react';
import './AddProperty.css'
import { Link } from "react-router-dom";

export default function BasicInfo({ nextStep, HandleFormData, values }) {


    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <form method='POST' action='#' onSubmit={submitFormData} className='card'>
            <section className='formSection'>
                <div className='formInput'>
                    <label>Property Type</label>
                    <select name="property"
                        value={values.property}
                        onChange={HandleFormData("property")}>
                        <option>Select Property Type</option>
                        <option value="Plot">Plot</option>
                        <option value="House">House</option>
                        <option value="Flat">Flat</option>
                    </select>
                </div>
                <div className='formInput'>
                    <label>Negotiable</label>
                    <select name='negotiable'
                    value={values.negotiable}
                    onChange={HandleFormData("negotiable")}>
                        <option value="#">Select Negotiable</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className='formInput'>
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={values.price}
                        onChange={HandleFormData("price")}
                        placeholder='Example:10000' 
                    />
                </div>
                <div className='formInput'>
                    <label>Ownership</label>
                    <select name='ownership'
                    value={values.ownership}
                    onChange={HandleFormData("ownership")}
                    >
                        <option value="#">Select Ownership</option>
                        <option value="individual">Individual Ownership</option>
                        <option value="joint">Joint Ownership</option>
                        <option value="bynomination">Ownership by Nomination</option>
                    </select>
                </div>
                <div className='formInput'>
                    <label>Property Age</label>
                    <input type="text" 
                    name="property_age" 
                    id="property_age"
                    value={values.propertyAge}
                    onChange={HandleFormData("propertyAge")} 
                    placeholder='Property Age in years'/>
                </div>
                <div className='formInput'>
                    <label>Property Approved</label>
                    <select name='approved'
                    value={values.propApproved}
                    onChange={HandleFormData("propApproved")}
                    >
                        <option value="#">Property Approved</option>
                        <option value="byBank">By Bank</option>
                        <option value="byGovt">By Government</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='formInput'>
                    <label>Property Description</label>
                    <input
                        type="text"
                        name="description"
                        value={values.propDescription}
                        onChange={HandleFormData("propDescription")}
                    placeholder='Property Description'
                    />
                </div>
                <div className='formInput'>
                    <label>Bank Loan</label>
                    <select name='bank loan'
                    value={values.bankLoan}
                    onChange={HandleFormData("bankLoan")}
                    >
                        <option value="#">Bank Loan</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                <div className='formInput'>
                    <Link to={"/propertyListingPage"}><button className='cancelBtn'>Cancel</button></Link>
                </div>

                <div className='formInput'>
                    <button type='submit' className='saveBtn'>Save & Continue</button>
                </div>
            </section>
        </form>
    )
}