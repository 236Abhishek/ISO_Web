import React,{useEffect, useState} from "react";
import {List, ListItem, ListItemText, ListItemButton} from "@mui/material";
import './styles/CategoryInfo.css';

const DisplayControlList = ({list, handleListItemClick, selectedIndex}) => {

    return (
        <div className="control-list">
            <List> {
                list.map((item, index) => (
                    <ListItemButton
                     selected={selectedIndex===index}
                        onClick={
                            (event) => handleListItemClick(event, index)
                    }>
                        <ListItem key={index}>
                            <ListItemText primary={
                                `${
                                    item.control_number
                                } : ${
                                    item.control_description
                                }`
                            }/>
                        </ListItem>
                    </ListItemButton>
                ))
            } </List>
        </div>
    )
}

export default DisplayControlList;

