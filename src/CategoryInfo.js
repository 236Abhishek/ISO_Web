import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import DisplayControlList from "./DisplayControlList";
import ControlExplanation from "./ControlExplanation";
import data from './data.json';
import SearchBar from "./SearchBar";
import './styles/CategoryInfo.css';

const CategoryInfo = () => {
    //extract the control info from the navigated URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const content = searchParams.get('content');
    const headerText = new URLSearchParams(location.search).get('controlname');

    //get the control related info based on the control selected
    const controlName = data.find(item => item[content]);
    const controlDetails = controlName ? controlName[content] : [];

    useEffect(() => {
        setControlInformationDetails(controlDetails)
        // console.log("FINAL DEATILS: ", controlInformationDetails)

    }, [controlDetails])
    const [controlInformationDetails, setControlInformationDetails] = useState([]);

    //search logic
    const [searchText, setSearchText] = useState("");
    const filteredData = controlInformationDetails.filter(item => item.control_number.toString().includes(searchText) || item.control_description.toString().toLowerCase().includes(searchText.toLowerCase()));

    //find out which control was clicked by user
    const [clickedControl, setClickedControl] = useState(" ");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [firstItemClicked, setFirstItemClicked] =useState(false);
    const handleListItemClick = (event, index) => {
        if(!firstItemClicked){
            setFirstItemClicked(true)
        }
        setClickedControl(event?.target?.innerText);
        setSelectedIndex(index);
    }

    return (
        <div>
            <p className="control-screen-header">
                {headerText.toUpperCase()} </p>
            <div className="control-screen-layout">
                <div className="left-side-controls">
                    <SearchBar searchText={searchText}
                        setSearchText={setSearchText}/>
                    <DisplayControlList list={filteredData} handleListItemClick={handleListItemClick} selectedIndex={selectedIndex}/>
                </div>
                <div className="control-explantion-part">
                    <ControlExplanation explanationData={filteredData} selectedControlByUser={clickedControl} firstItemClicked={firstItemClicked}/>
                </div>
            </div>
        </div>
    )
}

export default CategoryInfo;
