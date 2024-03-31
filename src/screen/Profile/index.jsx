import React, { useState } from "react";
import "./profileStyles.css";
import UniLogo from '../../assets/images/unilogo.png';

const Profile = () => {
    const [name, setName] = useState('');
    const [regNo, setRegNo] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleRegNoChange = (e) => {
        setRegNo(e.target.value);
    };

    return (
        <div className="root-profile">

            <div className="image-Container">
                <img 
                    className="image"
                    src={UniLogo}
                    alt="University Logo"
                />

                <div className="txt-Container">
                  <h2 className="title">University Of Vavuniya</h2>
                  <h1 className="sub-title"> Sri Lanka </h1>
                </div>

            </div>

            <div className="main-box">

                <div className="input-container">
                    <label className="label">Name :</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={handleNameChange}
                        className="input-field"
                    />
                </div>
                   
                <div className="input-container">
                    <label className="label">Reg No :</label>
                    <input
                        type="text"
                        placeholder="Enter Reg No"
                        value={regNo}
                        onChange={handleRegNoChange}
                        className="input-field"
                    />
                </div>
                        
                <div className = "button-Container">
                    <button
                        type="submit"
                        className = "submit-Button"
                    >
                        {" "}
                            Search{" "}
                    </button>
                </div>


                <div className = "student-Container">
                        {/* student pic */}

                    <div className="student-pic">
                    </div>

                        {/* student details display  */}

                    <div className="student-Details">
                    </div>

                </div>

                <div className = "button-Container">
                    <button
                        type="submit"
                        className = "submit-Button"
                    >
                        {" "}
                            Return {" "}
                    </button>
                </div>
                    
            </div>

        </div>
    );
};

export default Profile;
