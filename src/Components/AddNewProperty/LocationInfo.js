import React from 'react';
import './AddProperty.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LocationInfo({ nextStep, HandleFormData, prevStep, values, insertImages }) {

    // console.log(insertImages)
    const navigate = useNavigate();
    const submitFormData = async (e) => {
        e.preventDefault();
        console.log(values)
        console.log(insertImages)
        let formData = new FormData();

        let key = Object.keys(values);
        let value = Object.values(values)
        for (let i = 0; i < key.length; i++) {
            // console.log(key[i], value[i])  
            formData.append(key[i], value[i]);
        }
        Array.from(insertImages).forEach((image) => {
            formData.append("items", image)
            console.log(image)
        })

        for (let key of formData.entries()) {
            console.log(key)
        }


        let token = localStorage.getItem("token");
        let id = localStorage.getItem("userid");

        //for render.com
        // let url = "https://real-estate-app-zedu.onrender.com/api/users/property";
        //for local
        // let url = "http://localhost:8000/api/users/property";
        //for vercel
        let url = "https://real-estate-backend-kohl.vercel.app/api/users/property";

        axios.post(url, formData, {
            headers: {
                'token': token,
                'id': id,
            }
        })
            .then(navigate("/propertyListingPage"))
            .catch((err) => {
                console.log(err);
            });

        nextStep();
        // navigate("/propertyListingPage")
    };

    return (
        <form method='POST' action='#' onSubmit={submitFormData} className='card'>
            <section className='formSection'>
                <div className='formInput'>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder='Email'
                        value={values.email}
                        onChange={HandleFormData("email")}
                        required
                    />
                </div>
                <div className='formInput'>
                    <label>City</label>
                    <input type="text"
                        name="city"
                        id="city"
                        value={values.city}
                        onChange={HandleFormData("city")}
                        placeholder='City' />
                </div>
                <div className='formInput'>
                    <label>Area</label>
                    <input type="text"
                        name="area"
                        id="area"
                        value={values.area}
                        onChange={HandleFormData("area")}
                        placeholder='Area' />
                </div>

                <div className='formInput'>
                    <label>Pincode</label>
                    <input type="text"
                        name="pincode"
                        id="pincode"
                        value={values.pincode}
                        onChange={HandleFormData("pincode")}
                        placeholder='Pincode' />
                </div>
                <div className='formInput'>
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder='Address'
                        value={values.address}
                        onChange={HandleFormData("address")}
                        requireds
                    />
                </div>
                <div className='formInput'>
                    <label>Landmark</label>
                    <input
                        type="text"
                        name="landmark"
                        placeholder='Landmark'
                        value={values.landmark}
                        onChange={HandleFormData("landmark")}
                    />
                </div>
                <div className='formInput'>
                    <label>Latitude</label>
                    <input
                        type="text"
                        name="latitude"
                        placeholder='Latitude'
                        value={values.latitude}
                        onChange={HandleFormData("latitude")}
                    />
                </div>
                <div className='formInput'>
                    <label>Longitude</label>
                    <input
                        type="text"
                        name="longitude"
                        placeholder='Longitude'
                        value={values.longitude}
                        onChange={HandleFormData("longitude")}
                    />
                </div>

                <div className='formInput'>
                    <button className='cancelBtn' onClick={prevStep}>Previous</button>
                </div>

                <div className='formInput'>
                    <button className='saveBtn' type='submit'>Add Property</button>
                </div>

            </section>

        </form>
    )
}