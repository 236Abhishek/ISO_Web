import React, {useEffect, useState} from "react";
import './styles/Explanation.css'

const Explanation = ({data}) => {
    
    return (
        <div className="explanation-data">
           <p>{data}</p>
        </div>
    )
}

export default Explanation;

