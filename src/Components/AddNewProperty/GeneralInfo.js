import React from 'react';
import './AddProperty.css';
import { AiOutlineCamera } from "react-icons/ai";


export default function GeneralInfo({ nextStep, HandleFormData, prevStep, values, addImage }) {


  const submitFormData = (e) => {
    e.preventDefault();
    // Array.from(insertImages).forEach((image) => {
    //   values.images.set('items', image)
    // })
    nextStep();

  };
  

  

  return (
    <form method='POST' action='#' onSubmit={submitFormData} className='card'>
      <section className='formSection'>
        <div className='formInput'>
          <label>Owner Name</label>
          <input type="text"
            name="owner"
            id="owner"
            value={values.name}
            onChange={HandleFormData("name")}
            placeholder='Owner Name' 
            required= 'true'
            />
        </div>
        <div className='formInput'>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            placeholder='Enter Mobile Number'
            value={values.mobile || ""}
            onChange={HandleFormData("mobile")}
            required= 'true'
          />
        </div>
        <div className='formInput'>
          <label>Posted By</label>
          <select name='postedBy'
            value={values.postedBy}
            onChange={HandleFormData("postedBy")}
          >
            <option value="#">Posted By</option>
            <option value="owner">Owner</option>
            <option value="broker">Broker</option>
          </select>
        </div>
        <div className='formInput'>
          <label>Sale Type</label>
          <select name='sale'
            value={values.saleType}
            onChange={HandleFormData("saleType")}
          >
            <option value="#">Please Select</option>
            <option value="sought">Offers being sought</option>
            <option value="negotiation">Sale by negotiation</option>
            <option value="asking">Asking price given</option>
            <option value="Tender">Tender</option>
            <option value="enquiry">Buyer Enquiry Over $</option>
            <option value="auctionOwner">Auction (by owner)</option>
            <option value="auction">Auction (mortgagee sale)</option>
          </select>
        </div>
        <div className='formInput'>
          <label>Featured Package</label>
          <input type='text'
            name='featuredPackage'
            placeholder='Enter Featured Package'
            value={values.package}
            onChange={HandleFormData("package")}
          >
          </input>
        </div>
        <div className='formInput'>
          <label>PPD Package</label>
          <input type='text'
            name='ppdPackage'
            placeholder='Enter PPD Package'
            value={values.ppdPackage}
            onChange={HandleFormData("ppdPackage")}
          >
          </input>
        </div>
        <div className='formInput'>

          <label htmlFor="inputTag" className='eclipseCamera'>
            <input type="file"
              name="images"
              id="inputTag"
              onChange={(e)=>addImage(e)}
              multiple />
            <AiOutlineCamera id='camera' />
            <span>Add Photo</span>
          </label>
        </div>
        <br />


        <div className='formInput'>
          <button className='cancelBtn' onClick={prevStep}>Cancel</button>
        </div>
        <div className='formInput'>
          <button className='saveBtn' type='submit'>Save & Continue</button>
        </div>

      </section>

    </form>
  )
}