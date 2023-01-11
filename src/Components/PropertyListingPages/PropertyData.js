import React from 'react';
import "./PropertyData.css";

function PropertyData({ showData, setShowPopUp }) {
  console.log(showData);
  
  const returnBack = () => {
    setShowPopUp(false)
  }


  return (
    <div id='data'>
      <div id='stickyHead'>
      <div id='heading'> <h2>Selected Property Data</h2>
        <div id='dataCancle' onClick={returnBack}>X</div>
      </div>
      <hr />
      </div>

      <div className='dataContainer'>
        <div className='images'>
          {showData.image.map((image, i) => {
            return <img src={"http://localhost:8000/" + image.path} alt={image.originalname} key={i} className='fetchedimg' />
          })}
        </div>
        <hr />
        <div className='infoPage'>
          <h3>Basic Info</h3>
          <ul className='infoContainer'>
            <li className='data'>
              <label htmlFor="">Property Type :- </label>
              <span>{showData.property}</span>
            </li>
            <li className='data'>
              <label htmlFor="">Negotiable :- </label>
              <span>{showData.negotiable}</span>
            </li>
            <li className='data'>
              <label htmlFor="">Property Price :- </label>
              <span>{showData.price}</span>
            </li>
            <li className='data'>
              <label htmlFor="">Property Ownership :- </label>
              <span>{showData.ownership}</span>
            </li>
            <li className='data'>
              <label htmlFor="">Property Age :- </label>
              <span>{showData.propertyAge}</span>
            </li>
            <li className='data'>
              <label htmlFor="">Property Approved :-</label>
              <span>{showData.propApproved}</span>
            </li>
            <li className='data' id='description'>
              <label htmlFor="">Property Description :- </label>
              <span>{showData.propDescription}</span>
            </li>
            <li className='data'>
              <label htmlFor="">Bank Loan :- </label>
              <span>{showData.bankLoan}</span>
            </li>
          </ul>

          <hr />
          <h3>Property Details</h3>
          <div className='infoContainer'>

            <div className='data'>
              <label htmlFor="">Property Length :- </label>
              <span>{showData.length}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Property Bredth :- </label>
              <span>{showData.breadth}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Total Area :- </label>
              <span>{showData.area + " " + showData.areaUnit}</span>
            </div>
            <div className='data'>
              <label htmlFor="">No of BHK :- </label>
              <span>{showData.bhk}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Attached :- </label>
              <span>{showData.attached}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Western Toilet :- </label>
              <span>{showData.westToilet}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Furnished :- </label>
              <span>{showData.furnished}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Car Parking :- </label>
              <span>{showData.parking}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Lift :- </label>
              <span>{showData.lift}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Electricity :- </label>
              <span>{showData.electricity}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Property Facing :- </label>
              <span>{showData.facing}</span>
            </div>
            <div className='data'></div>
          </div>

          <hr />
          <h3>General Info</h3>
          <div className='infoContainer'>

            <div className='data'>
              <label htmlFor="">Owner Name :- </label>
              <span>{showData.name}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Mobile No. :- </label>
              <span>{showData.mobile}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Posted By :- </label>
              <span>{showData.postedBy}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Sale Type :- </label>
              <span>{showData.saleType}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Featured Package :- </label>
              <span>{showData.package}</span>
            </div>
            <div className='data'>
              <label htmlFor="">PPD Package :- </label>
              <span>{showData.ppdPackage}</span>
            </div>
          </div>

          <h3>Location Info</h3>
          <div className='infoContainer'>

            <div className='data'>
              <label htmlFor="">Email Id :- </label>
              <span>{showData.email}</span>
            </div>
            <div className='data'>
              <label htmlFor="">City :- </label>
              <span>{showData.city}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Area :- </label>
              <span>{showData.addArea}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Pincode :- </label>
              <span>{showData.pincode}</span>
            </div>
            <div className='data' id='address'>
              <label htmlFor="">Address :- </label>
              <span>{showData.address}</span>
            </div>
            <div className='data' id='landmark'>
              <label htmlFor="">Landmark :- </label>
              <span>{showData.landmark}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Lattitude :- </label>
              <span>{showData.lattitude}</span>
            </div>
            <div className='data'>
              <label htmlFor="">Longitude :- </label>
              <span>{showData.longitude}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyData