import React, {useEffect, useState} from "react";
import './styles/CategoryInfo.css';
import {Checkbox, FormControlLabel, Radio} from "@mui/material";
import Explanation from "./Explanation";

const ControlExplanation = ({explanationData, selectedControlByUser, firstItemClicked}) => {
    const [toggle, setToggle] = useState(false);
    const [yesValue, setYesValue] = useState(true);
    const [noValue, setNoValue ] = useState(false);
    const [displayData, setDisplayData] = useState("");

    //while clicking different control items we need to show yes so toggle should be false
    useEffect(()=>{
        setToggle(false)
        setYesValue(true);
        setNoValue(false);
    },[selectedControlByUser])

    const handleChange = (event) => {
        if(toggle){
            setYesValue(true)
            setNoValue(false)
        }
        setToggle((toggle) => !toggle);
    }

    useEffect(() => {
        if (toggle) {
            handleNoSelection();
        }
    }, [toggle]);

    const handleNoSelection =() => {
            const matchedItem = explanationData.find(data => {
                const parts = selectedControlByUser.split(' : ');
                return data.control_number === parts[0] && data.control_description === parts[1];
            });
    
            if (matchedItem) {
                setDisplayData(matchedItem.explanation);
                setNoValue(true);
                setYesValue(false);
            } 
    }

    return (
        <div className="control-explanation-div">
            <h1 className="control-explanation-header">Present in IT Security side screen
            </h1>
            {firstItemClicked && (
                <>
                 <FormControlLabel
                 label="Yes"
                 control={<Checkbox checked={yesValue} onChange={handleChange} />}
               />
               <FormControlLabel
                 label="No"
                 control={<Checkbox checked={noValue} onChange={handleChange} />}
               />
               </>
              )}
            {displayData && noValue && <Explanation data={displayData}/>}
        </div>
    )
}

export default ControlExplanation;

