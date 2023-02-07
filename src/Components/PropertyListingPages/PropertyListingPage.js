import React from 'react';
import "./PropertyData.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { TbEdit } from "react-icons/tb";
// TbEye
import { BsImages } from "react-icons/bs";
import CommonPage from '../CommonPage';
import Pagination from './Pagination';
import PropertyData from './PropertyData';

function PropertyListingPage() {
    //to search PPDID
    const [PPDID, setPPDID] = useState("");
    //fetch data
    const [propertyList, setPropertyList] = useState({
        property: []
    });
    const [showProperty, setShowProperty] = useState(true);


    const changeStatus = (e) => {
        // console.log(e)
        if(e.target.innerHTML === "Unsold"){
            e.target.innerHTML = "Sold";
            e.target.parentElement.nextSibling.innerHTML = 0
            // console.log(e.target.parentElement.nextSibling.innerHTML)
            // propertyList.property.filter((data) => {
            //     return data.ppdId === PPDID ? propertyList.property.daysLeft=== 0 : ''
            // })
        }else{
            e.target.innerHTML = "Unsold"
        }
    }

    const getPropertyDetails = (e) => {
        e.preventDefault();
        console.log(PPDID)
        propertyList.property.filter((data) => {
            return data.ppdId === PPDID ? setShowProperty(false) : setShowProperty(true)
        })

    }
    const navigate = useNavigate();

    let token = localStorage.getItem("token")
    let id = localStorage.getItem("userid")
    // console.log(token)
    // const getAllListedPropeties = async () => {
    //     // console.log(location.state.token)
    //     await fetch("http://localhost:8000/api/users/property", {
    //         method: 'GET',
    //         headers: {
    //             'token': token,
    //             'id': id,
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //     }).then((response) => {
    //         console.log(response)
    //         if (response.statusText === 'Forbidden') {
    //             alert("Session over");
    //             navigate("/");
    //         } else { response.json().then(result => setPropertyList(result)) }
    //     }).catch((err) => console.log(err));
    // };

    // eslint-disable-next-line
    useEffect(() => {
        // getAllListedPropeties();
        // console.log(propertyList);

        //for render.com
        let url = "https://real-estate-app-zedu.onrender.com/api/users/property";
        //for local
        // let url = "http://localhost:8000/api/users/property";
        //for vercel
        // let url = "https://real-estate-backend-kohl.vercel.app/api/users/property"

        fetch(url, {
            method: 'GET',
            headers: {
                'token': token,
                'id': id,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            console.log(response)
            if (response.statusText === 'Forbidden') {
                alert("Session over");
                navigate("/");
            } else { response.json().then(result => setPropertyList(result)) }
        }).catch((err) => console.log(err));

    }, [id, navigate, token]);

    // popup property data
    const [showData, setShowData] = useState([])
    const [showPopUp, setShowPopUp] = useState(false)
    const popupData = (id) => {
        console.log(id)
        propertyList.property.filter((data) => {
            return data.ppdId === id ? setShowData(data) : []
        })
        setShowPopUp(true)
        console.log(propertyList)
    }

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;

    // this current data is slice of origional data that woud be shown on page
    const currentData = propertyList.property.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => {
        // console.log(pageNumber)
        setCurrentPage(pageNumber)
    }


    return (
        <CommonPage>
            <div className='operations'>
                <div id="PPDID">
                    <form action="#" onSubmit={getPropertyDetails} id='searchForm'>
                        <input className='searchinput' type="text" value={PPDID} name="searchPPD" placeholder='Search PPD ID' onChange={(e) => setPPDID(e.target.value)} />
                        <button className='searchbtn'>Search</button>
                    </form>
                </div>
                <button className='addPropertybtn'>
                    <Link to={"/form"}>+ Add Property</Link>
                </button>
            </div>

            <table className='property-table'>
                <thead>
                    <tr className='tableHeader'>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th onClick={() => setShowProperty(true)}>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Days Left</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showProperty ?
                        (propertyList.property && currentData.map((data, index) => {
                            return <tr className='tableData' key={index} >
                                <td>{data.ppdId}</td>
                                <td >
                                    <BsImages onClick={() => popupData(data.ppdId)} />
                                </td>
                                <td>{data.property}</td>
                                <td>{data.mobile}</td>
                                <td>{data.area}</td>
                                <td>{data.views}</td>
                                <td><button onClick={(e) => changeStatus(e)} className='unSoldbtn'>Unsold</button></td>
                                <td>{data.daysLeft}</td>
                                <td className='edit'>
                                    {/* <TbEye className="iconsEdit" /> */}
                                    <TbEdit className="iconsEdit" />
                                </td>
                            </tr>

                        }))
                        :
                        (propertyList.property && propertyList.property.map((data, index) => {
                            return data.ppdId === PPDID ? (
                                // setShowProperty(false)
                                // console.log(data.ppdId)
                                <tr className='tableData' key={index}>
                                    <td>{data.ppdId}</td>
                                    <td>
                                        <BsImages onClick={() => popupData(data.ppdId)} />
                                    </td>
                                    <td>{data.property}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.area}</td>
                                    <td>{data.views}</td>
                                    <td><button onClick={(e) => changeStatus(e)} className='unSoldbtn'>Unsold</button></td>
                                    <td>{data.daysLeft}</td>
                                    <td className='edit'>
                                        {/* <TbEye className="iconsEdit" /> */}
                                        <TbEdit className="iconsEdit" />
                                    </td>
                                </tr>
                            ) : ''
                        }))
                    }
                </tbody>
            </table>

            {showPopUp && <PropertyData showData={showData} setShowPopUp={setShowPopUp} />}
            <Pagination paginate={paginate} dataLength={propertyList.property.length} dataPerPage={dataPerPage} />
        </CommonPage>
    )
}

export default PropertyListingPage