import { useState } from "react";
import './AddProperty.css';
import CommonPage from "../CommonPage";
import BasicInfo from "./BasicInfo";
import PropertyDetail from "./PropertyDetails";
import GeneralInfo from "./GeneralInfo";
import LocationInfo from "./LocationInfo";
import PropertyListingPage from "../PropertyListingPages/PropertyListingPage";
import PropertyNav from "./PropertyNav";


function Form() {
    const [step, setstep] = useState(1);
    const [insertImages, setInsertImages] = useState([])

    const [values, setValues] = useState({
        "property": "",
        "length": "",
        "breadth": "",
        "area": "",
        "mobile": "",
        "negotiable":"",
        "price":"",
        "ownership":"",
        "propertyAge" : "",
        "propApproved":"",
        "propDescription":"",
        "bankLoan":"",
        "areaUnit":"",
        "bhk":"",
        "floorNum":"",
        "attached":"",
        "westToilet":"",
        "furnished":"",
        "parking":"",
        "lift":"",
        "electricity":"",
        "facing":"",
        "name":"",
        "postedBy":"",
        "saleType":"",
        "package":"",
        "ppdPackage":"",
        "email":"",
        "city":"",
        "addArea":"",
        "pincode":"",
        "address":"",
        "landmark":"",
        "latitude":"",
        "longitude":""
    })

    const nextStep = () => {
        setstep(step + 1);
    };

    const prevStep = () => {
        setstep(step - 1);
    };

    const navStep = (navValue) => {

        setstep(navValue);
    }


    const handleInputData = input => e => {
        setValues({ ...values, [input]: e.target.value })
    }

    const addImage = e => {
        console.log(e.target.files)
        setInsertImages(e.target.files) 
    }
    


    switch (step) {
        case 1:
            return (
                <CommonPage>

                    <div className="form-elements">
                        <PropertyNav step={step} navStep={navStep} />
                        <BasicInfo nextStep={nextStep} HandleFormData={handleInputData} values={values} />

                    </div>
                </CommonPage>

            );
        case 2:
            return (
                <CommonPage>

                    <div className="form-elements">
                        <PropertyNav step={step} navStep={navStep} />
                        <PropertyDetail nextStep={nextStep} prevStep={prevStep} HandleFormData={handleInputData} values={values} />

                    </div>
                </CommonPage>

            );
        case 3:
            return (
                <CommonPage>
                    <div className="form-elements">
                        <PropertyNav step={step} navStep={navStep} />
                        <GeneralInfo nextStep={nextStep} prevStep={prevStep} HandleFormData={handleInputData} values={values} addImage={addImage}/>
                    </div>
                </CommonPage>

            );
        case 4:
            return (
                <CommonPage>
                    <div className="form-elements">
                        <PropertyNav step={step} navStep={navStep} />
                        <LocationInfo nextStep={nextStep} prevStep={prevStep} HandleFormData={handleInputData} values={values} insertImages={insertImages}/>
                    </div>
                </CommonPage>

            );
        case 5:
            return (
                <div className="form-elements">
                    <PropertyListingPage values={values} />
                </div>
            );

        default:

    }
}

export default Form;