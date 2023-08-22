import {Button} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './styles/ISOMainScreen.css';

const ISOMainScreen = () => {
    const [displayCategories, setDisplayCategories] = useState(false);
    const navigate = useNavigate();

    const handleISOButtonClick = () => {
        setDisplayCategories((displayCategories) => !displayCategories);
    }

    const onCategoryClick = (event) => {
        let screen = event ?. target.childNodes[0].textContent
        let displayContent = "";
        if (screen === 'Organizational controls (37)') {
            displayContent = 'OC'
        } else if (screen === 'People Controls (8)') {
            displayContent = 'PC'
        } else if (screen === 'Physical Controls (14)') {
            displayContent = 'PhyC'
        } else {
            displayContent = 'TC'
        } navigate(`/categoryInfo?content=${displayContent}&controlname=${screen}`);
    }

    return (
        <div>
            <div>
                <p className="header"><b>ISO27001:2022 CONTROL CHECKLIST</b>
                </p>
            </div>
            <div className="main-iso-container">
                <div className="iso-image-button">
                    <img src={
                            require("./assets/iso_bg.jpeg")
                        }
                        alt="ISO Logo"
                        className="iso-logo"
                        onClick={handleISOButtonClick}/> 
                </div>
                {
                displayCategories ? <>
                    <div className="iso-buttons">
                        <div className="button-container">
                            <Button variant="contained" className="button"
                                onClick={onCategoryClick}>
                                Organizational controls (37)</Button>
                        </div>

                        <div className="button-container">
                            <Button variant="contained" className="button"
                                onClick={onCategoryClick}>People Controls (8)</Button>
                        </div>

                        <div className="button-container">
                            <Button variant="contained" className="button"
                                onClick={onCategoryClick}>Physical Controls (14)</Button>
                        </div>
                        <div className="button-container">
                            <Button variant="contained" className="button"
                                onClick={onCategoryClick}>Technological Controls (34)</Button>
                        </div>
                    </div>
                </> : null
            } </div>
        </div>

    )
}

export default ISOMainScreen;

