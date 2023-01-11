import React from 'react';
import './AddProperty.css'

export default function PropertyDetail({ nextStep, HandleFormData, prevStep, values }) {

const submitFormData = (e) => {
    e.preventDefault();
      nextStep();
  };

  return ( 
    <form method='POST' action='#' onSubmit={submitFormData} className='card'>
        <section className='formSection'>
        <div className='formInput'>
            <label>Length</label>
            <input 
                type="text" 
                name="length" 
                placeholder='Example:10000'
                value={values.length || ""} 
                onChange={HandleFormData("length")}
            />
        </div>
        <div className='formInput'>
            <label>Breadth</label>
            <input 
                type="text" 
                name="breadth" 
                placeholder='Example:10000'
                value={values.breadth || ""} 
                onChange={HandleFormData("breadth")}
            />
        </div>
        <div className='formInput'>
            <label>Total Area</label>
            <input 
                type="text" 
                name="area" 
                placeholder='Example:10000'
                value={values.length * values.breadth || values.area || ""} 
                onChange={HandleFormData("area")}
            />
        </div>
        <div className='formInput'>
            <label>Area Unit</label>
            <select name="units" id="unit"
            value={values.areaUnit} 
            onChange={HandleFormData("areaUnit")}
            >
                <option value="#"> Select Area unit</option>
                <option value="sqmeter">Sq meter</option>
                <option value="sqfoot">Sq foot</option>
                <option value="acre">Acre</option>
                <option value="hectare">Hectare</option>
            </select>
        </div>
        <div className='formInput'>
            <label>No of BHK</label>
            <select name='bhk'
            value={values.bhk} 
            onChange={HandleFormData("bhk")}
            >
                <option value="#">Select No of BHK</option>
                <option value="rk">1 RK</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
                <option value="5bhk">5 BHK</option>
                <option value="more">More than 5 BHK</option>
            </select>
        </div>
        <div className='formInput'>
            <label>No of Floor</label>
            <input type="number" 
            name="floorNum" 
            id="floorNum"
            value={values.floorNum} 
            onChange={HandleFormData("floorNum")}
            placeholder='Select No of Floor' min={0}/>
        </div>
        <div className='formInput'>
            <label>Attached</label>
            <select name='attached'
            value={values.attached} 
            onChange={HandleFormData("attached")}
            >
                <option value="#">Select Attached</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Western Toilet</label>
            <select name='westernToilet'
            value={values.westToilet} 
            onChange={HandleFormData("westToilet")}
            >
                <option value="#">Select Western Toilet</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
        </select>
        </div>
        <div className='formInput'>
            <label>Furnished</label>
            <select name='furnished'
            value={values.furnished} 
            onChange={HandleFormData("furnished")}
            >
                <option value="#">Select Furnished</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Car Parking</label>
            <select name='carParking'
            value={values.parking} 
            onChange={HandleFormData("parking")}
            >
                <option value="#">Select Car Parking</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Lift</label>
            <select name='lift'
            value={values.lift} 
            onChange={HandleFormData("lift")}
            >
                <option value="#">Select Lift</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>
        <div className='formInput'>
            <label>Electricity</label>
            <input 
                type="text" 
                name="electricity" 
                placeholder='Example:3 phase'
                value={values.electricity} 
            onChange={HandleFormData("electricity")}
            />
        </div>
        <div className='formInput'>
            <label>Facing</label>
            <select name='facing'
            value={values.facing} 
            onChange={HandleFormData("facing")}
            >
                <option value="#">Select Facing</option>
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="East-West">East-West</option>
                <option value="North-West">West-North</option>
                <option value="North-South">North-South</option>
                <option value="South-East">South-East</option>
            </select>
        </div>
        <br/>


        <div className='formInput'>
                <button className='cancelBtn' onClick={prevStep}>Cancel</button>
        </div>
        <div className='formInput'>
                <button className='saveBtn'>Save & Continue</button>
        </div>

        </section>
        
    </form>
  )
}